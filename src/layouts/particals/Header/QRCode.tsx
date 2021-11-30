import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '@constants/index';
import { ButtonGroup, Form, Overlay, Tooltip } from 'react-bootstrap';
import * as yup from 'yup';
import { Formik } from 'formik';
import Fetching from '@components/Fetching';
import { QRCodeStyled } from './style';
import { Loop } from '@styled-icons/material/Loop';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Icon from '@components/Icon';

const schema = yup.object({
  verify_code: yup
    .string()
    .required('Please enter verify code')
    .length(6, 'Verify code is only 6 characters'),
});

export default function QRCode() {
  const dispatch = useDispatch();
  const enableTFAResult = useSelector((state: globalState) => state.tfa);
  const [copied, setCopied] = useState(false);
  const target = useRef(null);
  const inputRef = useRef(document.createElement('input'));
  useEffect(() => {
    const timer = setInterval(() => {
      if (copied) {
        setCopied(false);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [copied]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const confirm = (values, { setSubmitting }) => {
    dispatch({
      type: ActionTypes.CONFIRM_VERIFY_CODE_REQUEST,
      payload: { ...values },
    });
  };
  const copySponsorLink = () => {
    setCopied(!copied);
  };

  return (
    <QRCodeStyled>
      <div className="confirm-container">
        <Fetching actionType={ActionTypes.CONFIRM_VERIFY_CODE_REQUEST} />
        <Formik
          validationSchema={schema}
          onSubmit={confirm}
          initialValues={{
            verify_code: '',
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
                <Form.Group controlId="formCurrentPasswords">
                  <div className="qr-code-container">
                    <p>Capture this QR-code so you can scan it later.</p>
                    <img
                      style={{ width: '130px' }}
                      src={enableTFAResult.qrCode}
                      alt="QR CODE"
                    />
                    <p style={{ marginTop: '10px' }}>
                      If you can't scan the image, enter this code instead:
                    </p>
                    <div className="secret-code">
                      <Form.Control
                        disabled
                        type="text"
                        value={enableTFAResult.secret_code}
                      />
                      <CopyToClipboard text={enableTFAResult.secret_code}>
                        <div
                          className="copy-btn"
                          ref={target}
                          onClick={() => copySponsorLink()}
                        >
                          <Icon name="copy" />
                        </div>
                      </CopyToClipboard>
                      <Overlay
                        target={target.current}
                        show={copied}
                        placement="top"
                      >
                        {(props) => (
                          <Tooltip id="overlay-example" {...props}>
                            Copied
                          </Tooltip>
                        )}
                      </Overlay>
                    </div>
                  </div>
                  <Form.Label>Verify Code</Form.Label>
                  <Form.Control
                    type="text"
                    name="verify_code"
                    autoComplete="off"
                    value={values.verify_code}
                    onChange={handleChange}
                    isInvalid={!!errors.verify_code && touched.verify_code}
                    ref={inputRef}
                    isValid={
                      (!errors.verify_code as any) &&
                      (values.verify_code as any)
                    }
                  />
                  {errors.verify_code && touched.verify_code && (
                    <Form.Control.Feedback type="invalid">
                      {errors.verify_code}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
                <ButtonGroup>
                  <button type="submit" disabled={isSubmitting}>
                    <Loop />
                    <span>Confirm</span>
                  </button>
                </ButtonGroup>
              </Form>
            );
          }}
        </Formik>
      </div>
    </QRCodeStyled>
  );
}
