import React, { useEffect } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';
import { ModalStyled } from './style';
import Icon from '@components/Icon';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '@constants/index';
import qs from 'qs';
export default function RegistrationConfirmation() {
  const history = useHistory();
  const param = qs.parse(window.location.search, { ignoreQueryPrefix: true });
  const fetching = useSelector((state: globalState) => state.fetching);
  const { type, status } = fetching;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: ActionTypes.CONFIRM_REGISTRATION_REQUEST,
      payload: {
        _id: param.user,
        verify_code: param.verify_code,
      },
    });
  }, []);
  const backToLogin = () => {
    history.push('/login');
  };
  const renderContent = () => {
    if (type === ActionTypes.CONFIRM_REGISTRATION_REQUEST && status) {
      return <Spinner animation="border" color="primary" />;
    }
    if (type === ActionTypes.CONFIRM_REGISTRATION_SUCCESS && !status) {
      return (
        <Modal
          show={true}
          onHide={() => {
            backToLogin();
          }}
        >
          <ModalStyled>
            <Modal.Body>
              <div className="content">
                <div className="icon-contaner">
                  <Icon name="check" />
                </div>
                <h4>Verification Successful</h4>
                <Button onClick={() => backToLogin()}>
                  Back To Login Page
                </Button>
              </div>
            </Modal.Body>
          </ModalStyled>
        </Modal>
      );
    }
  };
  return <>{renderContent()}</>;
}
