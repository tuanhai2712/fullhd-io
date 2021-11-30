import React, { useState } from 'react';
import { Button, Modal, Form, Spinner, ButtonGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { ActionTypes } from '@constants/index';
import { ModalStyled } from './style';
import Icon from '@components/Icon';

const schema = yup.object({
  password: yup.string().required('Please enter password before confirm'),
});

type ConfirmWithdrawalProps = {
  children: any;
  confirm: any;
  fetching: boolean;
  success: boolean;
  disabled?: any;
};

export default function ConfirmWithdrawal({
  children,
  confirm,
  fetching,
  success,
  disabled,
}: ConfirmWithdrawalProps) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const submit = (values, { setSubmitting }) => {
    confirm(values.password);
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
    if (fetching) {
      return (
        <div className="fetching">
          <Spinner animation="border" color="primary" />
        </div>
      );
    }
    if (success) {
      return (
        <div className="ai-active">
          <div className="bg-ai-active">
            <img src="/ai/buy-ai-success.png" alt="Withdrawal Success" />
            <div className="check-ai-active">
              <Icon name="check" />
            </div>
          </div>
          <h4>Withdrawal Successful</h4>
          <label>
            You have successfully withdrawn money to your main account
          </label>
          <Button onClick={() => close(false)}>Close</Button>
        </div>
      );
    }
    return (
      <Formik
        validationSchema={schema}
        initialValues={{
          password: '',
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
                <label>Password</label>
                <div className="input-unit">
                  <Form.Control
                    autoComplete="off"
                    type="password"
                    className="with-unit"
                    value={values.password}
                    name="password"
                    onChange={handleChange}
                    isInvalid={
                      (!!errors.password as any) && (touched.password as any)
                    }
                  />
                  {errors.password && touched.password && (
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  )}
                  <span className="unit">
                    <Icon name="lock" />
                  </span>
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
      <ButtonGroup>
        <Button
          style={disabled && { pointerEvents: 'none' }}
          disabled={disabled}
          onClick={() => close(true)}
        >
          {children}
        </Button>
      </ButtonGroup>

      <Modal
        show={open}
        onHide={() => {
          close(false);
        }}
      >
        <ModalStyled>
          <Modal.Header>
            <Modal.Title>Confirm Password</Modal.Title>
          </Modal.Header>

          <Modal.Body>{renderContent()}</Modal.Body>
        </ModalStyled>
      </Modal>
    </>
  );
}
