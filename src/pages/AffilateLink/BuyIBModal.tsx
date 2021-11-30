import React, { useEffect, useState } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '@constants/index';
import { ModalStyled } from './style';
import Tooltips from '@components/Tooltips';

export default function BuyIBModal() {
  const fetching = useSelector((state: globalState) => state.fetching);
  const { userInfo, isDemo } = useSelector((state: globalState) => state.user);
  const { amount } = userInfo;
  const [open, setOpen] = useState(false);
  const [balanceIsNotEnough, setBalanceIsNotEnough] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (amount < 100) {
      setBalanceIsNotEnough(true);
    }
  }, [amount]);

  const close = (status) => {
    if (!status) {
      dispatch({
        type: ActionTypes.CLEAR_FETCHING,
      });
    }
    setOpen(status);
  };

  const buyIB = () => {
    dispatch({
      type: ActionTypes.BUY_IB_REQUEST,
    });
  };
  const renderContent = () => {
    const { type, status } = fetching;
    if (type === ActionTypes.BUY_IB_REQUEST && status) {
      return (
        <div className="fetching">
          <Spinner animation="border" color="primary" />
        </div>
      );
    }
    return (
      <>
        <div className="modal-form">
          <div className="form-group package-container">
            <label>Package</label>
            <span>{`$ 100`}</span>
          </div>
        </div>
        {balanceIsNotEnough && (
          <div className="balance-is-not-enough">
            The balance is not enough, please add more money to your account
          </div>
        )}
        <div className="modal-form">
          <div className="form-group">
            <Button
              onClick={() => buyIB()}
              disabled={
                type === ActionTypes.BUY_IB_REQUEST || balanceIsNotEnough
              }
              className="btn-buy-ai"
            >
              Confirm
            </Button>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {isDemo ? (
        <Tooltips
          name="buyIB"
          message=" Demo accounts cannot perform this action"
          placement="right"
        >
          <span className="d-inline-block">
            <Button
              disabled
              style={{ pointerEvents: 'none' }}
              className="btn-open-buy-ib-modal"
            >
              Buy Now $100
            </Button>
          </span>
        </Tooltips>
      ) : (
        <Button
          onClick={() => {
            close(true);
          }}
          className="btn-open-buy-ib-modal"
        >
          Buy Now $100
        </Button>
      )}

      <Modal
        show={open}
        onHide={() => {
          close(false);
        }}
      >
        <ModalStyled>
          <Modal.Header>
            <Modal.Title>Buy IB</Modal.Title>
          </Modal.Header>

          <Modal.Body>{renderContent()}</Modal.Body>
        </ModalStyled>
      </Modal>
    </>
  );
}
