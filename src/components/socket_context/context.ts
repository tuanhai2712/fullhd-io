import React, { createContext } from "react";

const SocketContext = createContext({
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
  tradingData: new Array(),
  win: 0 || null,
  resetWin: (_currentContext: any) => { },
  aiFirstData: new Array<{ x: number, y: number }>()
});

export default SocketContext;
