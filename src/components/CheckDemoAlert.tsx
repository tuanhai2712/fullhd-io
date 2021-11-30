import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import { ActionTypes } from '@constants/action-types';

type AlertProps = {
  variant: string;
  message: string;
};

export default function CheckDemoAlert({ variant, message }: AlertProps) {
  const dispatch = useDispatch();
  const { showDemoErr } = useSelector((state: globalState) => state.user);

  return (
    <Alert
      show={showDemoErr}
      variant={variant}
      onClose={() =>
        dispatch({
          type: ActionTypes.SHOW_ERROR_DEMO,
          payload: false
        })
      }
      dismissible
    >
      <span>{message}</span>
    </Alert>
  );
}
