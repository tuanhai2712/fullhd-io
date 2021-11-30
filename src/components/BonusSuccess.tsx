import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionTypes } from '@constants/index';

import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import cup from './cup.png';
import * as utils from '@utils/utils';

export default function ServerError() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const { showBonusAt } = useSelector(
    (state: globalState) => state.user.bonus ?? { showBonusAt: false }
  );
  const bgModal = { backgroundColor: 'white', borderRadius: '10px' };
  const goldColor = { color: 'gold' };
  const picW = { width: '300px' };

  const handleToggle = () => {
    dispatch({
      type: ActionTypes.UPDATE_BONUS_FLAG_REQUEST
    });
    setShowModal(false);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const date = new Date();
  //     const sec = date.getSeconds();
  //     if (sec === 0) {
  //       const authToken = utils.getStorage('authToken');
  //       if (authToken !== null && authToken !== '') {
  //         dispatch({
  //           type: ActionTypes.GET_BONUS_STATUS_REQUEST,
  //         });
  //       }
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    if (showBonusAt) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [showBonusAt]);

  return (
    /* Provide Redux store */

    <Modal show={showModal} centered={true}>
      <Modal.Body style={bgModal}>
        <div className="textCenter">
          <img style={picW} src={cup}></img>
          <h3 style={goldColor}>You get bonus money</h3>
          <br />
          <Button variant="outline-warning" onClick={handleToggle}>
            GET IT
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
