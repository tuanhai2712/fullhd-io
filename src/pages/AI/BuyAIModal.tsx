import React, { useEffect, useState } from 'react';
import { Button, Modal, Form, Spinner } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '@constants/index';
import { ModalStyled } from './style';
import Icon from '@components/Icon';
import Tooltips from '@components/Tooltips';

const schema = yup.object({
  amount: yup
    .number()
    .typeError('You must specify a number')
    .required('Amount of Investment is required')
    .min(200, 'The minimum amount of investment is 200$'),
});

export default function BuyAIModal() {
  const fetching = useSelector((state: globalState) => state.fetching);
  const { userInfo, isDemo } = useSelector((state: globalState) => state.user);
  const { amount } = userInfo;
  const [open, setOpen] = useState(false);
  const [balanceIsNotEnough, setBalanceIsNotEnough] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (amount < 300) {
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

  const buyAIBot = (values, { setSubmitting }) => {
    if (parseInt(values.amount) + 100 <= amount) {
      dispatch({
        type: ActionTypes.BUY_AI_ROBOT_REQUEST,
        amount: parseInt(values.amount),
      });
    } else {
      setBalanceIsNotEnough(true);
    }

    setSubmitting(false);
  };
  const renderContent = () => {
    const { type, status } = fetching;
    if (type === ActionTypes.BUY_AI_ROBOT_REQUEST && status) {
      return (
        <div className="fetching">
          <Spinner animation="border" color="primary" />
        </div>
      );
    }
    if (type === ActionTypes.BUY_AI_ROBOT_SUCCESS && !status) {
      return (
        <div className="ai-active">
          <div className="bg-ai-active">
            <img src="/ai/buy-ai-success.png" alt="Buy AI Success" />
            <div className="check-ai-active">
              <Icon name="check" />
            </div>
          </div>
          <h4>Robot Actived</h4>
          <label>Your package was actived, now you can add investment</label>
          <Button onClick={() => close(false)}>Back to AI page</Button>
        </div>
      );
    }
    return (
      <Formik
        validationSchema={schema}
        initialValues={{
          amount: 0,
        }}
        onSubmit={buyAIBot}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          isSubmitting,
          errors,
          touched,
        }) => (
          <Form onSubmit={handleSubmit as any}>
            <div className="modal-form">
              <div className="form-group package-container">
                <label>Package</label>
                <span>{`$ 100`}</span>
              </div>
            </div>
            <div className="modal-form">
              <div className="form-group required">
                <label>First Investment</label>
                <div className="input-unit">
                  <Form.Control
                    autoComplete="off"
                    type="text"
                    className="with-unit"
                    value={values.amount}
                    name="amount"
                    onChange={handleChange}
                    isInvalid={
                      (!!errors.amount as any) && (touched.amount as any)
                    }
                  />
                  {errors.amount && touched.amount && (
                    <Form.Control.Feedback type="invalid">
                      {errors.amount}
                    </Form.Control.Feedback>
                  )}
                  <span className="unit">USDT</span>
                  {balanceIsNotEnough && (
                    <div className="balance-is-not-enough">
                      The balance is not enough, please add more money to your
                      account or change amount of investment
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-buy-ai"
                >
                  Confirm
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    );
  };

  return (
    <>
      {isDemo ? (
        <Tooltips
          name="buyAI"
          message=" Demo accounts cannot perform this action"
          placement="right"
        >
          <span className="d-inline-block">
            <Button
              disabled
              style={{ pointerEvents: 'none' }}
              className="btn-open-buy-ai-modal"
            >
              Buy AI Robot
            </Button>
          </span>
        </Tooltips>
      ) : (
        <Button
          onClick={() => {
            close(true);
          }}
          className="btn-open-buy-ai-modal"
        >
          Buy AI Robot
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
            <Modal.Title>Buy AI Robot</Modal.Title>
          </Modal.Header>

          <Modal.Body>{renderContent()}</Modal.Body>
        </ModalStyled>
      </Modal>
    </>
  );
}
