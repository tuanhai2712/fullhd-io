import React, { useState, useEffect, useContext } from 'react';
import SocketContext from '@components/socket_context/context';
import useSound from 'use-sound';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '@constants/index';
import TradingApi from '@services/api/TradingApi';
import { ButtonGroup, AlertWrapper } from './style';
import Icon from '@components/Icon';
import { socket } from '@utils/sockets';
import './styles.css';
import { Alert } from 'react-bootstrap';
import { formatter } from '@utils/utils';
import audioWin from './win.mp3';
import audioLose from './lose.mp3';
import audioPlay from './play.mp3';

interface IProps {
  place: number;
}

const BuySellAction = (props: IProps) => {
  const dispatch = useDispatch();

  const context = useContext(SocketContext);

  const [playWin] = useSound(audioWin);
  const [playLose] = useSound(audioLose);
  const [playClicked] = useSound(audioPlay);

  const playAudio = async profit => {
    profit >= 0 ? playWin() : playLose();
  };

  const { userInfo, userDemoInfo, isDemo } = useSelector(
    (state: globalState) => state.user
  );

  const [state, setState] = useState({
    totalBuy: 0,
    totalSell: 0,
    notifiWinLoss: false,
    show: true,
    amountState: 0,
    loading: false,
    showAlert: false,
    showAlertSuccess: false,
    amountCurrent: 0,
    win: null
  });

  useEffect(() => {
    if (!socket.disconnected) {
      TradingApi.totalBuySell().then(result => {
        setState(state => ({
          ...state,
          totalBuy: result.data.total_buy,
          totalSell: result.data.total_sell,
          amountCurrent:
            state.amountCurrent + result.data.total_buy + result.data.total_sell
        }));
      });
    }

    if (userInfo || userDemoInfo) {
      socket.off(userInfo._id).on(userInfo._id, (win) => {
        setState((state) => ({ ...state, win: win }));
      });
    }

    const interval = setInterval(() => {
      setState(state => ({ ...state, show: !socket.disconnected }));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setState(state => ({
      ...state,
      amountState: isDemo ? userDemoInfo.amount : userInfo.amount,
      amountCurrent: isDemo ? userDemoInfo.amount : userInfo.amount
    }));
  }, [isDemo]);

  useEffect(() => {
    if (state.win) {
      const newAmount = state.amountCurrent + (state.win || 0);
      playAudio(state.win);
      dispatch({
        type: isDemo
          ? ActionTypes.UPDATE_USER_DEMO_INFOR
          : ActionTypes.UPDATE_USER_INFOR,
        payload: { amount: newAmount }
      });
      setState(state => ({
        ...state,
        totalBuy: 0,
        totalSell: 0,
        notifiWinLoss: true,
        amountState: newAmount,
        amountCurrent: newAmount
      }));
      setTimeout(() => {
        setState(state => ({ ...state, notifiWinLoss: false }));
      }, 2000);
    }
  }, [state.win]);

  useEffect(() => {
    if (!state.notifiWinLoss) {
      // context.resetWin(context);
      setState(state => ({ ...state, win: null }))
    }
  }, [state.notifiWinLoss]);

  useEffect(() => {
    if (state.showAlertSuccess) {
      const timer = setTimeout(
        () => setState(state => ({ ...state, showAlertSuccess: false })),
        1000
      );
      return () => clearTimeout(timer);
    }
  }, [state.showAlertSuccess]);

  useEffect(() => {
    if (state.showAlert) {
      const timer = setTimeout(
        () => setState(state => ({ ...state, showAlert: false })),
        1000
      );
      return () => clearTimeout(timer);
    }
  }, [state.showAlert]);

  const buySellFail = (type: number, error: object) => {
    dispatch({
      type: isDemo
        ? ActionTypes.UPDATE_USER_DEMO_INFOR
        : ActionTypes.UPDATE_USER_INFOR,
      payload: { amount: state.amountCurrent }
    });
    dispatch({ type: ActionTypes.RESPONSE_FAILURE, payload: error });
    if (type === 1) {
      setState(state => ({
        ...state,
        totalBuy: state.totalBuy - props.place,
        loading: false
      }));
    } else {
      setState(state => ({
        ...state,
        totalSell: state.totalSell - props.place,
        loading: false
      }));
    }
  };

  const onClickBuy = () => {
    if (props.place === 0) return;
    if (state.loading) {
      setState(state => ({
        ...state,
        showAlert: true,
        showAlertSuccess: false
      }));
    } else {
      setState(state => ({ ...state, loading: true }));
      const statusBuySell =
        state.totalBuy + state.totalSell + props.place > state.amountState;
      if (statusBuySell) {
        dispatch({
          type: ActionTypes.RESPONSE_FAILURE,
          payload: 'You do not have enough money'
        });
        setState(state => ({ ...state, loading: false }));
        return;
      }
      dispatch({
        type: isDemo
          ? ActionTypes.UPDATE_USER_DEMO_INFOR
          : ActionTypes.UPDATE_USER_INFOR,
        payload: {
          amount:
            state.amountState - state.totalBuy - state.totalSell - props.place
        }
      });
      TradingApi.tradingBuySell(
        'btcusdt',
        1,
        props.place,
        state.totalBuy + state.totalSell
      )
        .then(result => {
          if (!result.data) buySellFail(1, result);
          else setState(state => ({ ...state, loading: false }));
        })
        .catch(error => buySellFail(1, error));
      playClicked();
      setState(state => ({
        ...state,
        totalBuy: state.totalBuy + props.place,
        showAlertSuccess: true
      }));
    }
  };

  const onClickSell = () => {
    if (props.place === 0) return;
    if (state.loading) {
      setState(state => ({
        ...state,
        showAlert: true,
        showAlertSuccess: false
      }));
    } else {
      setState(state => ({ ...state, loading: true }));
      const statusBuySell =
        state.totalBuy + state.totalSell + props.place > state.amountState;
      if (statusBuySell) {
        dispatch({
          type: ActionTypes.RESPONSE_FAILURE,
          payload: 'You do not have enough money'
        });
        setState(state => ({ ...state, loading: false }));
        return;
      }
      dispatch({
        type: isDemo
          ? ActionTypes.UPDATE_USER_DEMO_INFOR
          : ActionTypes.UPDATE_USER_INFOR,
        payload: {
          amount:
            state.amountState - state.totalBuy - state.totalSell - props.place
        }
      });
      TradingApi.tradingBuySell(
        'btcusdt',
        0,
        props.place,
        state.totalBuy + state.totalSell
      )
        .then(result => {
          if (!result.data) buySellFail(0, result);
          else setState(state => ({ ...state, loading: false }));
        })
        .catch(error => buySellFail(0, error));
      playClicked();
      setState(state => ({
        ...state,
        totalSell: state.totalSell + props.place,
        showAlertSuccess: true
      }));
    }
  };

  const handleToggle = () =>
    setState(state => ({ ...state, notifiWinLoss: !state.notifiWinLoss }));

  return (
    <>
      <ButtonGroup>
        {state.show ? (
          <>
            <button
              disabled={!context.isOpen}
              className="button button-buy"
              onClick={onClickBuy}
            >
              <span className="text-action">
                Buy
                <Icon name="buy" />
              </span>
              <span className="text-amount">{state.totalBuy}</span>
            </button>
            <button
              disabled={!context.isOpen}
              className="button button-sell"
              onClick={onClickSell}
            >
              <span className="text-action">
                Sell
                <Icon name="sell" />
              </span>
              <span className="text-amount">{state.totalSell}</span>
            </button>
          </>
        ) : null}
        {state.win ? (
          <Modal
            show={state.notifiWinLoss}
            onHide={handleToggle}
            aria-labelledby="contained-modal-title-vcenter"
            centered={true}
            dialogClassName="background-none"
          >
            <Modal.Body>
              <div className="modalWinLose">
                <span
                  style={{
                    color: (state.win || 0) < 0 ? '#db4931' : '#2cac40',
                    textAlign: 'center'
                  }}
                >
                  <span className="result-text">
                    {(state.win || 0) < 0 ? 'LOSS' : 'WIN'}
                  </span>
                  {(state.win || 0) < 0
                    ? '-$' +
                    formatter
                      .format(state.win || 0)
                      .toString()
                      .replace(/[-]/g, '')
                    : '+$' +
                    formatter
                      .format(state.win || 0)
                      .toString()
                      .replace(/[+]/g, '')}
                </span>
              </div>
            </Modal.Body>
          </Modal>
        ) : null}
      </ButtonGroup>
      <AlertWrapper>
        <Alert
          variant="danger"
          show={state.showAlert}
          className="alert"

        >
          Try again
        </Alert>
        <Alert
          variant="success"
          show={state.showAlertSuccess}
          className="alert"
        >
          <Icon name="check" /> Success
        </Alert>
      </AlertWrapper>
    </>
  );
};

export default React.memo(BuySellAction);
