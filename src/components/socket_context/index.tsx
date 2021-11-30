import React, { useState, useEffect, useContext } from "react";
import SocketContext from "./context";
import { initSockets, socket } from "@utils/sockets";
import { useSelector } from "react-redux";

const SocketProvider = (props) => {
  const { isDemo } = useSelector((state: globalState) => state.user);

  const [value, setValue] = useState({
    isLoadBlocks: false,
    tick: 0,
    isOpen: false,
    finalCandle: {
      date: new Date(),
      open: 0,
      high: 0,
      low: 0,
      close: 0,
      volume: 0,
      is_open: false
    },
    amount: 0,
    botTrade: [],
    tradingData: [],
    win: 0 || null,
    resetWin: (currentContext: any) => {
      setValue({ ...currentContext, win: null });
    },
    aiFirstData: new Array<{ x: number, y: number }>()
  });

  useEffect(() => {
    initSockets({ setValue, isDemo })
    socket.on('reconnect', () => {
      console.log("reconnect");
      initSockets({ setValue, isDemo })
    });
  }, [isDemo])

  return <SocketContext.Provider value={value}>
    {props.children}
  </SocketContext.Provider>;
};
export default SocketProvider;
