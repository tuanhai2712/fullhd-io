import React, { useState } from 'react';
import { Button, Modal, Form, Spinner, ButtonGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '@constants/index';
import { ModalStyled } from './style';
import Icon from '@components/Icon';

const schema = yup.object({
  email: yup
    .string()
    .email('Email is not valid')
    .required('Please enter email'),
});

export default function ResetPasswordModal() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const fetching = useSelector((state: globalState) => state.fetching);
  const { type, status } = fetching;

  const submit = (values, { setSubmitting }) => {
    dispatch({
      type: ActionTypes.RESET_PASSWORD_REQUEST,
      payload: values,
    });
    setSubmitting(false);
  };

  const close = (status) => {
    if (!status) {
      dispatch({
        type: ActionTypes.CLEAR_FETCHING,
      });
    }
    setOpen(status);
  };
  const renderContent = () => {
    if (type === ActionTypes.RESET_PASSWORD_REQUEST && status) {
      return (
        <div className="fetching">
          <Spinner animation="border" color="primary" />
        </div>
      );
    }
    if (type === ActionTypes.RESET_PASSWORD_SUCCESS && !status) {
      return (
        <div className="ai-active">
          <div className="bg-ai-active">
            <div className="check-ai-active">
              <Icon name="check" />
            </div>
          </div>
          <h4>Sent Request Successful</h4>
          <label>We have sent an email for you to reset password</label>
          <Button onClick={() => close(false)}>Close</Button>
        </div>
      );
    }

    return (
      <Formik
        validationSchema={schema}
        initialValues={{
          email: '',
        }}
        onSubmit={submit}
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
                <label>Email</label>
                <div className="input-unit">
                  <Form.Control
                    autoComplete="off"
                    type="text"
                    className="with-unit"
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                    isInvalid={
                      (!!errors.email as any) && (touched.email as any)
                    }
                  />
                  {errors.email && touched.email && (
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  )}
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
            </div>
          </Form>
        )}
      </Formik>
    );
  };
  return (
    <>
      <Button className="forgot-pass-btn" onClick={() => setOpen(true)}>
        Forgot Password
      </Button>
      <Modal
        show={open}
        onHide={() => {
          close(false);
        }}
      >
        <ModalStyled>
          {type === ActionTypes.RESET_PASSWORD_SUCCESS && !status ? null : (
            <Modal.Header>
              <Modal.Title>Forgot password</Modal.Title>
            </Modal.Header>
          )}

          <Modal.Body>{renderContent()}</Modal.Body>
        </ModalStyled>
      </Modal>
    </>
  );
}
