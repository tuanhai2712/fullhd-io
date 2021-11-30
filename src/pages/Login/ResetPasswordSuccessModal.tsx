import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '@constants/index';
import { ModalStyled } from './style';
import Icon from '@components/Icon';
import { useHistory } from 'react-router';

export default function ResetPasswordSuccessModal() {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const fetching = useSelector((state: globalState) => state.fetching);

  useEffect(() => {
    const { type, status } = fetching;
    if (type === ActionTypes.CONFIRM_RESET_PASSWORD_SUCCESS && !status) {
      setOpen(true);
    }
  }, [fetching]);

  const close = () => {
    dispatch({
      type: ActionTypes.CLEAR_FETCHING,
    });
    history.push('/login');
    setOpen(false);
  };

  const backToLogin = () => {
    history.push('/login');
  };
  return (
    <>
      <Modal show={open} onHide={() => close()}>
        <ModalStyled>
          <Modal.Body>
            <div className="ai-active">
              <div className="bg-ai-active">
                <div className="check-ai-active">
                  <Icon name="check" />
                </div>
              </div>
              <h4>Reset Password Successful</h4>
              <label>You can login with new password</label>
              <Button onClick={() => backToLogin()}>Back To Login Page</Button>
            </div>
          </Modal.Body>
        </ModalStyled>
      </Modal>
    </>
  );
}
