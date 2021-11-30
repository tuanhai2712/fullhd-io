import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form, Spinner, Alert } from 'react-bootstrap';
import { Formik } from 'formik';
import { ModalStyled } from './style';
import NumberFormat from 'react-number-format';
import WalletApi from '@services/api/WalletApi';
import { formatter } from '@utils/utils';
import Tooltips from '@components/Tooltips';
import { useSelector } from 'react-redux';
interface IProps {
  currency: string;
  userInfo: any;
  changeAmount: (amount: number) => void;
  amount: number;
  minWithdrawl: number;
}

const ModalWithdraw = (props: IProps) => {
  const inputCrrency = useRef<HTMLInputElement>(null);
  const { isDemo } = useSelector((state: globalState) => state.user);
  const [state, setState] = useState({
    showModalWithdraw: false,
    form: {
      amount: '',
      wallet_address: '',
      password: '',
      tfa_code: ''
    },
    loading: false,
    showError: '',
    fees: 0,
    amountReal: 0
  });

  /** hide alert after 3s */
  useEffect(() => {
    if (state.showError) {
      const timer = setTimeout(
        () => setState(state => ({ ...state, showError: '' })),
        5000
      );
      return () => clearTimeout(timer);
    }
  }, [state.showError]);

  /** toggle modal */
  const toggleModalWithdraw = () =>
    setState(state => ({
      ...state,
      showModalWithdraw: !state.showModalWithdraw
    }));

  /** valid form */
  const validate = (values: any) => {
    const errors = {};
    if (!values.amount) errors['amount'] = 'Required';
    else if (
      values.amount &&
      parseFloat(values.amount.toString().replace(/,/g, '')) <
        props.minWithdrawl
    )
      errors['amount'] =
        props.currency.toUpperCase() === 'ETH'
          ? 'The amount is greater than 0.1 ETH'
          : 'The amount is greater than $30';
    else if (
      values.amount &&
      parseFloat(values.amount.toString().replace(/,/g, '')) > props.amount
    )
      errors['amount'] = 'The amount is greater than the current balance';
    else if (!values.wallet_address) errors['wallet_address'] = 'Required';
    else if (!values.password) errors['password'] = 'Required';
    else if (props.userInfo.is_tfa_enabled && !values.tfa_code)
      errors['tfa_code'] = 'Required';
    return errors;
  };

  /** submit form */
  const handleWithdraw = (values: any) => {
    setState(state => ({ ...state, loading: true }));
    values.amount = parseFloat(values.amount.toString().replace(/,/g, ''));
    values.symbol = props.currency.toUpperCase().toLocaleLowerCase();
    WalletApi.withdrawAmountToUser(values)
      .then(result => {
        if (result.data) {
          /** change amount banance */
          props.changeAmount(values.amount);
          setState(state => ({
            ...state,
            loading: false,
            showModalWithdraw: !state.showModalWithdraw
          }));
        } else {
          setState(state => ({
            ...state,
            showError: result.data.message,
            loading: false
          }));
        }
      })
      .catch(error => {
        setState(state => ({
          ...state,
          showError: error.response.data.error.message || 'Error Withdraw!',
          loading: false
        }));
      });
  };

  /** event handle change amount, calculator total amount */
  const changeAmount = (
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  ) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const fees =
      (parseFloat(e.target.value.toString().replace(/,/g, '')) * 2) / 100;
    const amountReal =
      parseFloat(e.target.value.toString().replace(/,/g, '')) - fees;
    setState(state => ({ ...state, fees, amountReal }));
    setFieldValue('amount', e.target.value);
  };

  const onEntered = () => inputCrrency.current?.focus();

  const formatter6 = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 6
  });

  return (
    <>
      {isDemo ? (
        <Tooltips
          name="buyAI"
          message=" Demo accounts cannot perform this action"
          placement="top"
        >
          <span className="d-inline-block">
            <Button disabled={true} style={{ pointerEvents: 'none' }}>
              <i className="icon-Withdraw"></i>Withdraw
            </Button>
          </span>
        </Tooltips>
      ) : (
        <Button onClick={toggleModalWithdraw}>
          <i className="icon-Withdraw"></i>Withdraw
        </Button>
      )}

      <Modal
        backdrop="static"
        show={state.showModalWithdraw}
        onHide={toggleModalWithdraw}
        onEntered={onEntered}
      >
        <ModalStyled>
          <Modal.Header closeButton>
            <Modal.Title>
              <img
                src={`/img/icons/layout/${props.currency}.png`}
                alt="Currency"
              />
              Withdraw Money
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="info mb-4">
              <div className="info-row">
                <span>Available Balance:</span>
                <span className="dots"></span>
                <span className="amount-text amount-text--main">
                  {props.currency.toUpperCase() === 'ETH'
                    ? `${formatter.format(props.amount)} ETH`
                    : `$ ${formatter.format(props.amount)}`}
                </span>
              </div>
              <div className="info-row">
                <span>Minium Withdrawal:</span>
                <span className="dots"></span>
                <span className="amount-text amount-text--sub">
                  {props.currency.toUpperCase() === 'ETH'
                    ? `${formatter.format(props.minWithdrawl)} ETH`
                    : `$ ${formatter.format(props.minWithdrawl)}`}
                </span>
              </div>
            </div>
            <Formik
              initialValues={state.form}
              validate={validate}
              onSubmit={handleWithdraw}
            >
              {({
                values,
                handleChange,
                handleSubmit,
                errors,
                setFieldValue
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="modal-form">
                    <div className="form-group required">
                      <label>Amount</label>
                      <div className="input-unit">
                        <NumberFormat
                          getInputRef={inputCrrency}
                          thousandSeparator={true}
                          decimalScale={2}
                          maxLength={12}
                          allowNegative={false}
                          name="amount"
                          autoComplete="off"
                          placeholder="0"
                          className="form-control with-unit"
                          onChange={changeAmount(setFieldValue)}
                          value={values.amount}
                        />
                        <span className="unit">
                          {props.currency.toUpperCase()}
                        </span>
                      </div>
                      {errors.amount && (
                        <div className="error">{errors.amount}</div>
                      )}
                      <div className="info mt-2">
                        <div className="info-row">
                          <span>Transaction fees 2% (Matrix):</span>
                          <span className="dots"></span>
                          <span>
                            {formatter6.format(state.fees)}{' '}
                            {props.currency.toUpperCase()}
                          </span>
                        </div>
                        <div className="info-row">
                          <span>Net Amount:</span>
                          <span className="dots"></span>
                          <span className="highlighted">
                            {formatter6.format(state.amountReal)}{' '}
                            {props.currency.toUpperCase()}
                          </span>
                        </div>
                        <div className="info-row">
                          <span style={{ fontSize: '12px', color: 'red' }}>
                            Withdraw fees $20
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group required">
                      <label>Receiver Wallet Address</label>
                      <input
                        type="text"
                        autoComplete="off"
                        className="form-control"
                        name="wallet_address"
                        value={values.wallet_address}
                        onChange={handleChange}
                      />
                      {errors.wallet_address && (
                        <div className="error">{errors.wallet_address}</div>
                      )}
                    </div>
                    <div className="form-group required">
                      <label>Password</label>
                      <input
                        type="password"
                        autoComplete="off"
                        className="form-control"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                      />
                      {errors.password && (
                        <div className="error">{errors.password}</div>
                      )}
                    </div>
                    {props.userInfo.is_tfa_enabled ? (
                      <div className="form-group">
                        <label>2FA Code</label>
                        <input
                          type="password"
                          autoComplete="off"
                          className="form-control"
                          name="tfa_code"
                          value={values.tfa_code}
                          onChange={handleChange}
                        />
                        {errors.tfa_code && (
                          <div className="error">{errors.tfa_code}</div>
                        )}
                      </div>
                    ) : null}
                    <Alert
                      variant="danger"
                      show={state.showError ? true : false}
                    >
                      {state.showError}
                    </Alert>
                    <div className="form-group">
                      <Button type="submit" disabled={state.loading}>
                        {state.loading ? (
                          <Spinner
                            as="span"
                            animation="border"
                            role="status"
                            aria-hidden="true"
                          />
                        ) : null}
                        <i className="icon-Withdraw"></i>Withdraw
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </Modal.Body>
        </ModalStyled>
      </Modal>
    </>
  );
};

export default React.memo(ModalWithdraw);
