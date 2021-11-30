import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '@constants/index';
import { ModalStyled } from './style';
import Icon from '@components/Icon';

export default function RegistrationConfirmationEmail() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const fetching = useSelector((state: globalState) => state.fetching);
  const { type, status } = fetching;

  useEffect(() => {
    if (type === ActionTypes.USER_REGISTER_SUCCESS && !status) {
      setOpen(true);
    }
  }, [fetching]);

  const close = (status) => {
    if (!status) {
      dispatch({
        type: ActionTypes.CLEAR_FETCHING,
      });
    }
    setOpen(status);
  };
  return (
    <>
      <Modal
        show={open}
        onHide={() => {
          close(false);
        }}
      >
        <ModalStyled>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="content">
              <div className="icon-contaner">
                <Icon name="check" />
              </div>
            </div>
            <h4>Please Check Your Email</h4>
            <label>We have sent registration confirmation email</label>
          </Modal.Body>
        </ModalStyled>
      </Modal>
    </>
  );
}
