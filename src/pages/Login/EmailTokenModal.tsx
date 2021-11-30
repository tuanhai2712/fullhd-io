import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Spinner, ButtonGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '@constants/index';
import { ModalStyled } from './style';
import Icon from '@components/Icon';

export default function EmailLoginModal(params) {
  const dispatch = useDispatch();
  const fetching = useSelector((state: globalState) => state.fetching);
  const { emailLoginEnabled } = useSelector((state: globalState) => state.user);
  const { type, status } = fetching;
  const [emailSent, setEmailSent] = useState(false);

  const submit = (values, { setSubmitting }) => {
    dispatch({
      type: ActionTypes.LOGIN_EMAIL_REQUEST,
      payload: {
        ...values,
        identity: params.loginData.identity,
        password: params.loginData.password,
        previousPath: params.loginData.previousPath
      }
    });
    setEmailSent(false);
    setSubmitting(false);
  };

  const resendOnclick = () => {
    dispatch({
      type: ActionTypes.GET_EMAIL_TOKEN_REQUEST,
      payload: {
        identity: params.loginData.identity
      }
    });
    setEmailSent(true);
  };

  const renderContent = () => {
    if (type === ActionTypes.RESET_PASSWORD_REQUEST && status) {
      return (
        <div className="fetching">
          <Spinner animation="border" color="primary" />
        </div>
      );
    }

    return (
      <Formik
        initialValues={{
          login_code: ''
        }}
        onSubmit={submit}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          isSubmitting,
          errors,
          touched
        }) => (
          <Form onSubmit={handleSubmit as any}>
            <div className="modal-form">
              <div className="form-group required">
                <p>
                  Please check your email to get Verify Login Token or use TFA
                  for more sercure
                </p>
                <label>Token from Email :</label>
                <div className="input-unit">
                  <Form.Control
                    autoComplete="off"
                    type="text"
                    className="with-unit"
                    value={values.login_code}
                    name="login_code"
                    onChange={handleChange}
                    isInvalid={
                      (!!errors.login_code as any) &&
                      (touched.login_code as any)
                    }
                  />
                  {errors.login_code && touched.login_code && (
                    <Form.Control.Feedback type="invalid">
                      {errors.login_code}
                    </Form.Control.Feedback>
                  )}
                </div>
                {emailSent === false ? (
                  <p
                    onClick={resendOnclick}
                    style={{
                      color: '#007bff',
                      float: 'right',
                      cursor: 'pointer'
                    }}
                  >
                    Resend login token to email
                  </p>
                ) : (
                  <p
                    style={{
                      color: 'green',
                      float: 'right'
                    }}
                  >
                    Resend email success
                  </p>
                )}
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
      <Modal
        show={emailLoginEnabled && params.loginData.identity ? true : false}
        onHide={() => {
          dispatch({
            type: ActionTypes.CLEAR_FETCHING
          });
          dispatch({
            type: ActionTypes.OPEN_LOGIN_WITH_EMAIL,
            payload: { emailLoginEnabled: false }
          });
        }}
      >
        <ModalStyled>
          {type === ActionTypes.RESET_PASSWORD_SUCCESS && !status ? null : (
            <Modal.Header>
              <Modal.Title>Email Token Verify</Modal.Title>
            </Modal.Header>
          )}

          <Modal.Body>{renderContent()}</Modal.Body>
        </ModalStyled>
      </Modal>
    </>
  );
}
