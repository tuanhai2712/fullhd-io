import React from 'react';
import styled from 'styled-components';
import Toast from 'react-bootstrap/Toast';
import { isEmpty } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { ActionTypes } from '@constants/index';
import { useHistory } from 'react-router';
import { socket } from '@utils/sockets';
import * as utils from '@utils/utils';
import { Warning } from '@styled-icons/ionicons-outline/Warning';
const StyledResponseToast = styled(Toast)`
  position: absolute;
  top: 32px;
  right: 32px;
  z-index: 7;
  display: flex !important;
  flex-direction: row;
  background-color: #dc3545 !important;
  color: #fff !important;
  svg {
    width: 30px;
    margin: 0px 10px;
  }
  .toast-header {
    border-bottom: unset;
    background-color: #dc3545 !important;
    color: #fff !important;
  }
  .toast-body {
  }
`;

export default function ServerError() {
  const dispatch = useDispatch();
  const history = useHistory();
  const serverError = useSelector((state: globalState) => state.serverError);
  let error = '';
  if (serverError.response && serverError.response.status === 401) {
    if (
      serverError.response.data.data &&
      serverError.response.data.data.message
    ) {
      error = serverError.response.data.data.message; // handle error wrong 2fa code
    } else if (
      serverError.response.data.error &&
      serverError.response.data.error.message
    ) {
      error = serverError.response.data.error.message; // handle error check bonus for user
    } else {
      error = serverError.response.data.message;
    }
    if (socket.connected) socket.disconnect();
    localStorage.clear();
    history.push('/login');
  } else if (
    serverError.response &&
    [422, 400, 409, 500].includes(serverError.response.status)
  ) {
    if (serverError.response.data.error) {
      error = serverError.response.data.error.message; // handle error wrong password when withdrawal
    } else {
      error = serverError.response.data.data.message;
    }
  } else if (typeof serverError === 'string') {
    error = serverError;
  }
  return (
    /* Provide Redux store */
    <StyledResponseToast
      onClose={() => {
        dispatch({
          type: ActionTypes.CLOSE_TOAST_SERVER_ERROR,
        });
      }}
      show={!isEmpty(serverError)}
      delay={3000}
      autohide
    >
      <Warning />
      <div>
        <Toast.Header closeButton={false}>
          <strong className="mr-auto">Error</strong>
        </Toast.Header>
        <Toast.Body>{error}</Toast.Body>
      </div>
    </StyledResponseToast>
  );
}
