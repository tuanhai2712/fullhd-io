import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '@constants/index';
import { useHistory } from 'react-router';
import * as yup from 'yup';
import { Formik } from 'formik';
import ResetPasswordModal from './ResetPasswordModal';
import EmailLoginModal from './EmailTokenModal';
import { LoginPageStyled } from './style';
import Spinner from 'react-bootstrap/Spinner';

const LoginPage = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({});
  const fetching = useSelector((state: globalState) => state.fetching);
  const { tfaEnabled } = useSelector((state: globalState) => state.tfa);
  const { type, status } = fetching;
  const previousPath = props.location.state
    ? props.location.state.previousPath
    : '/home';
  const errorColor = { color: 'red' };

  const schema = yup.object({
    identity: yup.string().required('Please enter email or username'),
    password: yup
      .string()
      .required('Please enter password')
      .min(6, 'Password has at least 6 characters'),
    tfa_code:
      tfaEnabled &&
      yup
        .string()
        .required('Please enter verify code')
        .length(6, 'Verify code is only 6 characters')
  });

  useEffect(() => {
    dispatch({
      type: ActionTypes.CLEAR_TFA_DATA
    });
  }, []);

  const submitLogin = (values, { setSubmitting }) => {
    dispatch({
      type: tfaEnabled ? ActionTypes.LOGIN_WITH_TFA : ActionTypes.LOGIN_REQUEST,
      payload: {
        identity: values.identity,
        password: values.password,
        tfa_code: values.tfa_code,
        history,
        previousPath
      }
    });
    setLoginData({
      identity: values.identity,
      password: values.password,
      previousPath: previousPath
    });
    setSubmitting(false);
  };

  return (
    <LoginPageStyled>
      <Formik
        validationSchema={schema}
        initialValues={{ identity: '', password: '', tfa_code: '' }}
        onSubmit={submitLogin}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
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
                    <h3 className="title mb-5">Login to your Account</h3>
                    <form className="text-left" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="email">Username</label>
                        <input
                          style={{ color: 'white' }}
                          type="identity"
                          id="identity"
                          name="identity"
                          placeholder="Your email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.identity}
                        />
                        <p style={errorColor}>
                          {errors.identity &&
                            touched.identity &&
                            errors.identity}
                        </p>
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          style={{ color: 'white' }}
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Please Input Your Password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        <p style={errorColor}>
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </p>
                        <div className="text-right">
                          <EmailLoginModal loginData={loginData} />
                        </div>
                        <div className="text-right">
                          <ResetPasswordModal />
                        </div>
                      </div>
                      {tfaEnabled && (
                        <div className="form-group">
                          <label htmlFor="tfa_code">2FA Code</label>
                          <input
                            style={{ color: 'white' }}
                            type="text"
                            id="tfa_code"
                            name="tfa_code"
                            placeholder="Please Enter Verify Code"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.tfa_code}
                          />
                          <p style={errorColor}>
                            {errors.tfa_code &&
                              touched.tfa_code &&
                              errors.tfa_code}
                          </p>
                        </div>
                      )}
                      {type === ActionTypes.LOGIN_REQUEST && status && (
                        <div style={{ textAlign: 'center' }}>
                          <Spinner animation="border" variant="secondary" />
                        </div>
                      )}
                      <button
                        type="submit"
                        className="crypt-button-blue-full"
                        disabled={type === ActionTypes.LOGIN_REQUEST && status}
                      >
                        Log in
                      </button>
                    </form>
                    <p className="text-center mt-2">
                      Don't have account ?{' '}
                      <a href="/register">Please sign up</a>
                    </p>
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
export default LoginPage;
