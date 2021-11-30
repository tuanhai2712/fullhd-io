import React, { useContext, useEffect, useState } from "react";
import Chart from "./NewChart";
import SocketContext from "../../components/socket_context/context";
import Loading from "./LoadingChart";
import { socket } from "@utils/sockets";
import moment from "moment";

const ChartRedirect = () => {
  const { finalCandle, tick, tradingData, isLoadBlocks } = useContext(SocketContext);
  const [state, setState] = useState({
    tradingData: new Array<{
      date: Date;
      open: number;
      high: number;
      low: number;
      close: number;
      volume: number;
      is_open: boolean;
    }>(),
  });

  useEffect(() => {
    if (finalCandle.open === 0) return;
    let initialData = tradingData;
    if (initialData.length > 0 && finalCandle) {
      if (!isLoadBlocks && finalCandle) {
        finalCandle.open = initialData[initialData.length - 2].close;
        finalCandle.is_open = !finalCandle.is_open;
        initialData[initialData.length - 1] = finalCandle;
      }
      if (tick === 30) {
        const newBlock = Object.assign({}, finalCandle);
        newBlock.open = initialData[initialData.length - 1].close;
        newBlock.close = initialData[initialData.length - 1].close;
        newBlock.high = initialData[initialData.length - 1].close;
        newBlock.low = initialData[initialData.length - 1].close;
        newBlock.is_open = !newBlock.is_open;
        initialData.push(newBlock);
        initialData[initialData.length - 2].is_open = !initialData[initialData.length - 2].is_open;
        initialData.shift();
      }
      setState((state) => ({ ...state, tradingData: initialData }));
    }
    socket.on("connect", () => {
      window.location.reload();
    });
  }, [finalCandle, isLoadBlocks, tick, tradingData]);

  return tradingData.length === 0 || state.tradingData.length === 0 ? (
    <Loading loadData={tradingData.length === 0 || state.tradingData.length === 0} />
  ) : (
    <Chart data={state.tradingData} />
  );
};

export default React.memo(ChartRedirect);
