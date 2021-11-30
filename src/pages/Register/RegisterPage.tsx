import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { ActionTypes } from '@constants/index';
import { useHistory } from 'react-router';
import qs from 'qs';
import * as yup from 'yup';
import Spinner from 'react-bootstrap/Spinner';
import { Container, RegisterPageStyled } from './style';
import RegistrationConfirmationEmail from './RegistrationConfirmationEmail';
import { socket } from '@utils/sockets';

const RegisterPage: React.FC = () => {
  const param = qs.parse(window.location.search, { ignoreQueryPrefix: true });
  const history = useHistory();
  const fetching = useSelector((state: globalState) => state.fetching);
  const { type, status } = fetching;
  const dispatch = useDispatch();
  const inputColor = { color: 'white' };
  const errorColor = { color: 'red' };

  useEffect(() => {
    dispatch({
      type: ActionTypes.LOGOUT,
    });
    localStorage.clear();
    socket.disconnect();
  }, []);

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
    email: yup
      .string()
      .email('Email is not valid')
      .required('Please enter email'),
    username: yup
      .string()
      .required('Please enter username')
      .min(6, 'Username length must be 6 to 15 characters')
      .max(15, 'Username length must be 6 to 15 characters')
      .matches(
        /^[a-zA-Z0-9_-]+$/g,
        'Username can only contain letters, numbers, - or _'
      ),
    password: yup
      .string()
      .required('Please enter password')
      .min(6, 'Password length must be 6 to 20 characters')
      .max(20, 'Password length must be 6 to 20 characters'),
    confirmPassword: yup
      .string()
      .equalTo(yup.ref('password'), 'Please enter password to confirm'),
  });

  const register = (values, { setSubmitting }) => {
    dispatch({
      type: ActionTypes.USER_REGISTER_REQUEST,
      payload: {
        values,
        history,
      },
    });
    setSubmitting(false);
  };

  const goToHome = () => {
    history.push('/home');
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
        sponsor_username: param.sponsor,
      }}
      validationSchema={schema}
      onSubmit={register}
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
      }) => {
        return (
          <RegisterPageStyled>
            <Container>
              <div className="logo mt-3 mb-4">
                <img
                  src="/logo.png"
                  alt="Home Logo"
                  onClick={() => goToHome()}
                />
              </div>

              <div className="register-form pt-5 pb-5">
                <RegistrationConfirmationEmail />
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4 pr-md-0">
                    <div className="cryptorio-forms cryptorio-forms-dark">
                      <div className="cryptorio-main-form">
                        <h3 className="title mb-5">Register</h3>
                        <form className="text-left" onSubmit={handleSubmit}>
                          <div className="form-group">
                            <label htmlFor="referralUser">Referral User:</label>
                            <span style={{ marginLeft: 10 }}>
                              {values.sponsor_username
                                ? values.sponsor_username
                                : 'None'}
                            </span>
                          </div>
                          <div className="form-group">
                            <label htmlFor="username">Username*</label>
                            <input
                              style={inputColor}
                              type="text"
                              id="username"
                              name="username"
                              placeholder="Enter your username"
                              value={values.username}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            <p style={errorColor}>
                              {errors.username &&
                                touched.username &&
                                errors.username}
                            </p>
                          </div>
                          <div className="form-group">
                            <label htmlFor="email">Email*</label>
                            <input
                              style={inputColor}
                              type="text"
                              id="email"
                              name="email"
                              placeholder="Your email"
                              value={values.email}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            <p style={errorColor}>
                              {errors.email && touched.email && errors.email}
                            </p>
                          </div>
                          <div className="form-group">
                            <label htmlFor="password">Password*</label>
                            <input
                              style={inputColor}
                              type="password"
                              id="password"
                              name="password"
                              placeholder="6-20 letters and numbers"
                              value={values.password}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            <p style={errorColor}>
                              {errors.password &&
                                touched.password &&
                                errors.password}
                            </p>
                          </div>
                          <div className="form-group">
                            <label htmlFor="confirm-password">
                              Confirm Password*
                            </label>
                            <input
                              style={inputColor}
                              type="password"
                              id="confirmPassword"
                              name="confirmPassword"
                              placeholder="6-20 letters and numbers"
                              value={values.confirmPassword}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            <p style={errorColor}>
                              {errors.confirmPassword &&
                                touched.confirmPassword &&
                                errors.confirmPassword}
                            </p>
                          </div>
                          {type === ActionTypes.USER_REGISTER_REQUEST &&
                            status && (
                              <div style={{ textAlign: 'center' }}>
                                <Spinner
                                  animation="border"
                                  variant="secondary"
                                />
                              </div>
                            )}
                          <button
                            type="submit"
                            className="crypt-button-blue-full"
                            disabled={
                              type === ActionTypes.USER_REGISTER_REQUEST &&
                              status
                            }
                          >
                            Register
                          </button>
                        </form>
                        <p className="sub-text mt-3">
                          By creating an account, you agree to our{' '}
                          <a href="/">Term of Services</a> and{' '}
                          <a href="/">Privacy Policy</a>
                        </p>
                        <p className="float-text mt-2">
                          Have an account ? <a href="/login">Log In</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block col-md-6 col-lg-8 pl-md-0">
                    <div className="sign-up-info">
                      <div className="background"></div>
                      <p>
                        {
                          "One account \nis all you need to get into \nFast Money's Ecosystem"
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </RegisterPageStyled>
        );
      }}
    </Formik>
  );
};

export default RegisterPage;
