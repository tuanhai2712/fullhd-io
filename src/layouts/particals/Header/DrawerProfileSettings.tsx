import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup, Form, Overlay, Tooltip } from 'react-bootstrap';
import { ActionTypes } from '@constants/index';
import { DrawerScrollStyled } from './style';
import { Close } from '@styled-icons/material/Close';
import { Loop } from '@styled-icons/material/Loop';
import { ArrowBackIos } from '@styled-icons/material/ArrowBackIos';
import { DrawerHeader, DrawerContent } from '@material/react-drawer';
import '@material/react-drawer/dist/drawer.css';
import * as yup from 'yup';
import { Formik } from 'formik';
import Icon from '@components/Icon';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Spinner from 'react-bootstrap/Spinner';

const schema = yup.object({
  full_name: yup
    .string()
    .required('Please enter full name')
    .max(30, 'Full name too long'),
  phone: yup
    .string()
    .required('Please enter phone number')
    .min(10, 'The phone number is not in the correct format')
    .max(15, 'The phone number is not in the correct format'),
});

type DrawerProfileSettingsProps = {
  back: any;
  close: any;
};
export default function DrawerProfileSettings({
  back,
  close,
}: DrawerProfileSettingsProps) {
  const { userInfo } = useSelector((state: globalState) => state.user);
  const fetching = useSelector((state: globalState) => state.fetching);
  const [copied, setCopied] = useState(false);
  const dispatch = useDispatch();
  const target = useRef(null);

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

  const { type, status } = fetching;
  const update = (values, { setSubmitting }) => {
    dispatch({
      type: ActionTypes.UPDATE_USER_PROFILE_REQUEST,
      payload: {
        ...values,
        _id: userInfo._id,
      },
    });
    setSubmitting(false);
  };
  const copySponsorLink = () => {
    setCopied(!copied);
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
        <DrawerScrollStyled>
          <p className="title">Profile Settings</p>
          <div className="information">
            <p className="title-item">Information</p>
            <Form.Group controlId="sponsorLink" className="disable-input">
              <Form.Label>
                Affliate Link{' '}
                <CopyToClipboard
                  text={`${process.env.REACT_APP_WEB_URL}/register?sponsor=${userInfo.username}`}
                >
                  <button
                    className="copy-btn"
                    ref={target}
                    onClick={() => copySponsorLink()}
                  >
                    <Icon name="copy" />
                  </button>
                </CopyToClipboard>
                <Overlay
                  target={target.current}
                  show={copied}
                  placement="right"
                >
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      Copied
                    </Tooltip>
                  )}
                </Overlay>
              </Form.Label>
              <Form.Control
                disabled
                type="text"
                value={`${process.env.REACT_APP_WEB_URL}/register?sponsor=${userInfo.username}`}
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="disable-input">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className=""
                disabled
                type="text"
                value={userInfo.email}
                isValid={true}
              />
            </Form.Group>
            <Formik
              validationSchema={schema}
              onSubmit={update}
              initialValues={{
                phone: userInfo.phone,
                full_name: userInfo.full_name,
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
                    <Form.Group controlId="formFullName">
                      <Form.Label>Full name</Form.Label>
                      <Form.Control
                        required
                        autoComplete="full_name"
                        type="text"
                        value={values.full_name}
                        name="full_name"
                        onChange={handleChange}
                        isInvalid={
                          (!!errors.full_name as any) &&
                          (touched.full_name as any)
                        }
                        isValid={
                          (!errors.full_name as any) &&
                          (values.full_name as any)
                        }
                      />
                      {errors.full_name && touched.full_name && (
                        <Form.Control.Feedback type="invalid">
                          {errors.full_name}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                    <Form.Group controlId="formPhoneNumber">
                      <Form.Label>Phone number</Form.Label>
                      <Form.Control
                        autoComplete="full_name"
                        required
                        type="text"
                        value={values.phone}
                        name="phone"
                        onChange={handleChange}
                        isInvalid={
                          (!!errors.phone as any) && (touched.phone as any)
                        }
                        isValid={
                          (!errors.phone as any) && (values.phone as any)
                        }
                      />
                      {errors.phone && touched.phone && (
                        <Form.Control.Feedback type="invalid">
                          {errors.phone}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                    {type === ActionTypes.UPDATE_USER_PROFILE_REQUEST &&
                      status && (
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
                    {type === ActionTypes.UPDATE_USER_PROFILE_SUCCESS &&
                      !status && (
                        <div className="updated-success-message">
                          <Icon size={16} color="#2f844c" name="check" />
                          <p>Updated</p>
                        </div>
                      )}
                  </Form>
                );
              }}
            </Formik>
          </div>
        </DrawerScrollStyled>
      </DrawerContent>
    </>
  );
}
