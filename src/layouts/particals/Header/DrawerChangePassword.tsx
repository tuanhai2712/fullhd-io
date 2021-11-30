import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { ActionTypes } from '@constants/index';
import { Close } from '@styled-icons/material/Close';
import { Loop } from '@styled-icons/material/Loop';
import { ArrowBackIos } from '@styled-icons/material/ArrowBackIos';
import { DrawerHeader, DrawerContent } from '@material/react-drawer';
import '@material/react-drawer/dist/drawer.css';
import * as yup from 'yup';
import { Formik } from 'formik';
import Spinner from 'react-bootstrap/Spinner';

const equalTo = (ref: any, msg: any) => {
  return yup.mixed().test({
    name: 'equalTo',
    exclusive: false,
    message: msg,
    params: {
      reference: ref.path,
    },
    test: function (value: any) {
      return value === this.resolve(ref);
    },
  });
};
yup.addMethod(yup.string, 'equalTo', equalTo);

const schema = yup.object({
  password: yup.string().required('Please enter current password'),
  new_password: yup
    .string()
    .required('Please enter new password')
    .min(6, 'New password has at least 6 characters'),
  confirm_new_password: yup
    .string()
    .equalTo(yup.ref('new_password'), 'Please enter new password to confirm'),
});

type DrawerChangePasswordProps = {
  back: any;
  close: any;
};
export default function DrawerChangePassword({
  back,
  close,
}: DrawerChangePasswordProps) {
  const { userInfo } = useSelector((state: globalState) => state.user);
  const fetching = useSelector((state: globalState) => state.fetching);
  const { type, status } = fetching;
  const dispatch = useDispatch();

  const update = (values, { setSubmitting }) => {
    dispatch({
      type: ActionTypes.CHANGE_PASSWORD_REQUEST,
      payload: { ...values, _id: userInfo._id },
    });
    setSubmitting(false);
  };

  return (
    <>
      <DrawerHeader>
        <div className="drawer-header">
          <Button className="back-btn" onClick={() => back()}>
            <ArrowBackIos />
            <span>Back</span>
          </Button>
          <Button onClick={() => close()}>
            <Close />
          </Button>
        </div>
      </DrawerHeader>
      <DrawerContent className="drawer-content">
        <p className="title">Change Password</p>
        <div className="information">
          <p className="title-item">Information</p>
          <Formik
            validationSchema={schema}
            onSubmit={update}
            initialValues={{
              password: '',
              new_password: '',
              confirm_new_password: '',
            }}
          >
            {({
              handleSubmit,
              handleChange,
              isSubmitting,
              values,
              errors,
              touched,
            }) => {
              return (
                <Form noValidate onSubmit={handleSubmit as any}>
                  <Form.Group controlId="formCurrentPassword">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control
                      required
                      autoComplete="off"
                      type="text"
                      value={values.password}
                      name="password"
                      onChange={handleChange}
                      isInvalid={
                        (!!errors.password as any) && (touched.password as any)
                      }
                      isValid={
                        (!errors.password as any) && (values.password as any)
                      }
                    />
                    {errors.password && touched.password && (
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                  <Form.Group controlId="formNewPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                      autoComplete="off"
                      required
                      type="text"
                      value={values.new_password}
                      name="new_password"
                      onChange={handleChange}
                      isInvalid={
                        (!!errors.new_password as any) &&
                        (touched.new_password as any)
                      }
                      isValid={
                        (!errors.new_password as any) &&
                        (values.new_password as any)
                      }
                    />
                    {errors.new_password && touched.new_password && (
                      <Form.Control.Feedback type="invalid">
                        {errors.new_password}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                  <Form.Group controlId="formConfirmNewPassword">
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control
                      autoComplete="off"
                      required
                      type="text"
                      value={values.confirm_new_password}
                      name="confirm_new_password"
                      onChange={handleChange}
                      isInvalid={
                        (!!errors.confirm_new_password as any) &&
                        (touched.confirm_new_password as any)
                      }
                      isValid={
                        (!errors.confirm_new_password as any) &&
                        (values.confirm_new_password as any)
                      }
                    />
                    {errors.confirm_new_password &&
                      touched.confirm_new_password && (
                        <Form.Control.Feedback type="invalid">
                          {errors.confirm_new_password}
                        </Form.Control.Feedback>
                      )}
                  </Form.Group>
                  {type === ActionTypes.CHANGE_PASSWORD_REQUEST && status && (
                    <div style={{ textAlign: 'center' }}>
                      <Spinner animation="border" variant="secondary" />
                    </div>
                  )}
                  <ButtonGroup>
                    <button type="submit" disabled={isSubmitting}>
                      <Loop />
                      <span>Update</span>
                    </button>
                  </ButtonGroup>
                </Form>
              );
            }}
          </Formik>
        </div>
      </DrawerContent>
    </>
  );
}
