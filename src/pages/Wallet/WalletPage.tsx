import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Alert, Spinner } from 'react-bootstrap';
import ModalWithdraw from './ModalWithdraw';
import ModalTransfer from './ModalTransfer';
import { LeftCardStyled, RightCardStyled } from './style';
import WalletDeposit from './WalletDeposit';
import { ActionTypes } from '@constants/index';
import { formatter } from '@utils/utils';
import WalletApi from '@services/api/WalletApi';

interface IProps {
  currency: string;
}

const WalletUSDT = (props: IProps) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    amount: 0,
    minWithdrawl: 30,
    minDeposit: 30,
    showError: false,
    rate: 0,
    isLoading: false
  });

  const { userInfo } = useSelector((state: globalState) => state.user);

  useEffect(() => {
    setState(state => ({ ...state, isLoading: true }));
    let timer: any;
    if (props.currency?.toUpperCase() === 'ETH') {
      const convertAmount = () => {
        const error = () =>
          setState(state => ({
            ...state,
            amount: 0,
            showError: true,
            isLoading: false
          }));
        WalletApi.convertUsdtToEth(1)
          .then(result => {
            if (result.data) {
              const newEth =
                parseFloat(userInfo.amount) /
                parseFloat(result.data.convertAmount);
              setState(state => ({
                ...state,
                amount: newEth,
                minWithdrawl: 0.1,
                minDeposit: 0.1,
                showError: false,
                rate: result.data.convertAmount,
                isLoading: false
              }));
            } else error();
          })
          .catch(() => error());
      };
      timer = setInterval(() => convertAmount(), 5000);
      convertAmount();
    } else {
      setState(state => ({
        ...state,
        amount: userInfo.amount,
        minWithdrawl: 30,
        minDeposit: 30,
        rate: 0,
        isLoading: false
      }));
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [props.currency]);

  const changeAmount = (amount: number) => {
    if (props.currency === 'ETH') {
      userInfo.amount = parseFloat(userInfo.amount) - amount * state.rate;
      setState(state => ({ ...state, amount: userInfo.amount / state.rate }));
    } else {
      userInfo.amount = parseFloat(userInfo.amount) - amount;
      setState(state => ({ ...state, amount: userInfo.amount }));
    }
    dispatch({
      type: ActionTypes.UPDATE_USER_INFOR,
      payload: userInfo
    });
  };

  return (
    <>
      <Alert variant="danger" show={state.showError}>
        The amount of ETH is incorrect
      </Alert>
      <Row>
        <Col lg={6} className="mb-4 mb-lg-0">
          <LeftCardStyled>
            {state.isLoading ? (
              <Spinner
                animation="border"
                style={{ position: 'absolute', top: '45%', left: '45%' }}
              />
            ) : (
              <>
                <div className="content">
                  <h4>Balance</h4>
                  <h2>
                    {formatter.format(state.amount)}{' '}
                    {props.currency.toUpperCase()}
                  </h2>
                  <p>
                    minimum withdrawal amount:{' '}
                    <span>
                      {formatter.format(state.minWithdrawl)}{' '}
                      {props.currency.toUpperCase()}
                    </span>
                  </p>
                </div>
                <div className="modal-buttons">
                  {props.currency.toUpperCase() === 'USDT' ? (
                    <ModalTransfer
                      currency={props.currency}
                      userInfo={userInfo}
                      changeAmount={changeAmount}
                    />
                  ) : null}
                  <ModalWithdraw
                    currency={props.currency}
                    userInfo={userInfo}
                    amount={state.amount}
                    minWithdrawl={state.minWithdrawl}
                    changeAmount={changeAmount}
                  />
                </div>
              </>
            )}
          </LeftCardStyled>
        </Col>
        <Col lg={6}>
          <RightCardStyled>
            <WalletDeposit
              currency={props.currency}
              minDeposit={parseFloat(formatter.format(state.minDeposit))}
            />
          </RightCardStyled>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(WalletUSDT);
