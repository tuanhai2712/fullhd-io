import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Spinner, Alert } from 'react-bootstrap';
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
}

const ModalTransfer = (props: IProps) => {
  const inputCrrency = useRef<HTMLInputElement>(null);
  const { isDemo } = useSelector((state: globalState) => state.user);
  const [state, setState] = useState({
    showModalTransfer: false,
    form: {
      amount: '',
      username: '',
      password: '',
      tfa_code: ''
    },
    loading: false,
    showError: ''
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
  const toggleModalTransfer = () => {
    setState(state => ({
      ...state,
      showModalTransfer: !state.showModalTransfer
    }));
  };

  /** valid form */
  const validate = (values: any) => {
    const errors = {};
    if (!values.amount) errors['amount'] = 'Required';
    else if (
      values.amount &&
      parseFloat(values.amount.toString().replace(/,/g, '')) < 1
    )
      errors['amount'] = 'The amount is greater than $1';
    else if (
      values.amount &&
      parseFloat(values.amount.toString().replace(/,/g, '')) >
        parseFloat(props.userInfo.amount)
    )
      errors['amount'] = 'The amount is greater than the current balance';
    else if (!values.username) errors['username'] = 'Required';
    else if (!values.password) errors['password'] = 'Required';
    else if (props.userInfo.is_tfa_enabled && !values.tfa_code)
      errors['tfa_code'] = 'Required';
    return errors;
  };

  /** submit form */
  const handleTransfer = (values: any) => {
    setState(state => ({ ...state, loading: true }));
    values.amount = parseFloat(values.amount.toString().replace(/,/g, ''));
    if (values.username) {
      values.username = values.username.toLowerCase();
    }
    WalletApi.transferAmountToUser(values)
      .then(result => {
        if (result.data) {
          setState(state => ({
            ...state,
            loading: false,
            showModalTransfer: !state.showModalTransfer
          }));
          /** change amount banance */
          props.changeAmount(values.amount);
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
          showError: error.response.data.error.message || 'Error transfer!',
          loading: false
        }));
      });
  };

  const onEntered = () => inputCrrency.current?.focus();

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
              <i className="icon-transfer"></i>Transfer
            </Button>
          </span>
        </Tooltips>
      ) : (
        <Button onClick={toggleModalTransfer}>
          <i className="icon-transfer"></i>Transfer
        </Button>
      )}

      <Modal
        backdrop="static"
        show={state.showModalTransfer}
        onHide={toggleModalTransfer}
        onEntered={onEntered}
      >
        <ModalStyled>
          <Modal.Header closeButton>
            <Modal.Title>
              <img
                src={`/img/icons/layout/${props.currency}.png`}
                alt="Currency"
              />
              Transfer Money
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="info mb-4">
              <div className="info-row">
                <span>Available Balance:</span>
                <span className="dots"></span>
                <span className="amount-text amount-text--main">
                  $ {formatter.format(props.userInfo.amount)}
                </span>
              </div>
            </div>
            <Formik
              initialValues={state.form}
              validate={validate}
              onSubmit={handleTransfer}
            >
              {({ values, handleChange, handleSubmit, errors }) => (
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
                          onChange={handleChange}
                          value={values.amount}
                        />
                        <span className="unit">USDT</span>
                      </div>
                      {errors.amount && (
                        <div className="error">{errors.amount}</div>
                      )}
                    </div>
                    <div className="form-group required">
                      <label>Receiver Username</label>
                      <input
                        type="text"
                        autoComplete="off"
                        className="form-control"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                      />
                      {errors.username && (
                        <div className="error">{errors.username}</div>
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
                        <i className="icon-transfer"></i>Transfer
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

export default React.memo(ModalTransfer);
