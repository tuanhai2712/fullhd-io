import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '@constants/index';
import * as yup from 'yup';
import { Formik } from 'formik';
import { LoginPageStyled } from './style';
import qs from 'qs';
import Spinner from 'react-bootstrap/Spinner';
import ResetPasswordSuccessModal from './ResetPasswordSuccessModal';

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
  password: yup
    .string()
    .required('Please enter new password')
    .min(6, 'New password has at least 6 characters'),
  confirm_new_password: yup
    .string()
    .equalTo(yup.ref('password'), 'Please enter new password to confirm'),
});

const ConfirmResetPassword = () => {
  const param = qs.parse(window.location.search, { ignoreQueryPrefix: true });
  const fetching = useSelector((state: globalState) => state.fetching);
  const { type, status } = fetching;
  const dispatch = useDispatch();
  const errorColor = { color: 'red' };

  const changePassword = (values, { setSubmitting }) => {
    dispatch({
      type: ActionTypes.CONFIRM_RESET_PASSWORD_REQUEST,
      payload: {
        ...values,
        _id: param.user,
        verify_code: param.verify_code,
      },
    });
    setSubmitting(false);
  };

  return (
    <LoginPageStyled>
      <ResetPasswordSuccessModal />
      <Formik
        validationSchema={schema}
        initialValues={{ password: '', confirm_new_password: '' }}
        onSubmit={changePassword}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="cryptorio-forms cryptorio-forms-dark pt-5 pb-5">
                  <div className="cryptorio-main-form">
                    <div className="logo mb-5">
                      <img src="/logo.png" alt="logo" />
                    </div>
                    <h3 className="title mb-5">Confirm reset password</h3>
                    <form className="text-left" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          style={{ color: 'white' }}
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Please enter new password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        <p style={errorColor}>
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </p>
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input
                          style={{ color: 'white' }}
                          type="password"
                          id="password"
                          name="confirm_new_password"
                          placeholder="Please re enter new password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirm_new_password}
                        />
                        <p style={errorColor}>
                          {errors.confirm_new_password &&
                            touched.confirm_new_password &&
                            errors.confirm_new_password}
                        </p>
                      </div>
                      {type === ActionTypes.CONFIRM_RESET_PASSWORD_REQUEST &&
                        status && (
                          <div style={{ textAlign: 'center' }}>
                            <Spinner animation="border" variant="secondary" />
                          </div>
                        )}
                      <button
                        type="submit"
                        className="crypt-button-blue-full"
                        disabled={isSubmitting}
                      >
                        Reset Password
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </LoginPageStyled>
  );
};
export default ConfirmResetPassword;
