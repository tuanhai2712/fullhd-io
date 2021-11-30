import React, { useState, useEffect, useContext } from 'react';
import { socket, initSockets } from '@utils/sockets';
import LoadingProcess from '@components/LoadingProcess';

interface IProps {
  loadData?: boolean;
}

export default function LoadingChart(props: IProps) {
  const [state, setState] = useState({
    showDisconnect: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setState((state) => ({ ...state, showDisconnect: socket.disconnected }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return state.showDisconnect || props.loadData ? <LoadingProcess /> : null;
}
