import React, { useState } from 'react';
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

export default function AddInvestmentModal() {
  const fetching = useSelector((state: globalState) => state.fetching);
  const { isDemo } = useSelector((state: globalState) => state.user);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const close = (status) => {
    if (!status) {
      dispatch({
        type: ActionTypes.CLEAR_FETCHING,
      });
    }
    setOpen(status);
  };

  const addInvestment = (values, { setSubmitting }) => {
    dispatch({
      type: ActionTypes.ADD_INVESTMENT_REQUEST,
      amount: values.amount,
    });
    setSubmitting(false);
  };

  const renderContent = () => {
    const { type, status } = fetching;
    if (type === ActionTypes.ADD_INVESTMENT_REQUEST && status) {
      return (
        <div className="fetching">
          <Spinner animation="border" color="primary" />
        </div>
      );
    }
    if (type === ActionTypes.ADD_INVESTMENT_SUCCESS && !status) {
      return (
        <div className="ai-active">
          <div className="bg-ai-active">
            <img src="/ai/add-invest-success.png" alt="Add Invest Success" />
            <div className="check-ai-active">
              <Icon name="check" />
            </div>
          </div>
          <h4>Investment Successfull</h4>
          <label>
            Your package was actived, you can see detail in Ai Robot page
          </label>
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
        onSubmit={addInvestment}
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
              <div className="form-group required">
                <label>Amount Of Invest</label>
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
                  <span className="unit">USD</span>
                </div>
              </div>
              <div className="form-group">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-add-invest"
                >
                  Confirm
                </Button>
              </div>
              <span
                style={{
                  display: 'table-footer-group',
                  textAlign: 'center',
                }}
              >
                By click to confirm, you agree to Our's Terms Of Service and
                consent to our Cookie Policy and Privacy Policy
              </span>
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
              className="btn-open-add-invest-modal"
            >
              Add Investment
            </Button>
          </span>
        </Tooltips>
      ) : (
        <Button
          onClick={() => {
            close(true);
          }}
          className="btn-open-add-invest-modal"
        >
          Add Investment
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
            <Modal.Title>Add Investment</Modal.Title>
          </Modal.Header>

          <Modal.Body>{renderContent()}</Modal.Body>
        </ModalStyled>
      </Modal>
    </>
  );
}
