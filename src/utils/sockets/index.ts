import socketIO from "socket.io-client";
import { socketEvents } from "./events";
import { connected } from "./emit";

const ENDPOINT = process.env.REACT_APP_ENDPOINT || "http://localhost:6789";
export const socket = socketIO(ENDPOINT, { path: '/kline' });

export const initSockets = ({ setValue, isDemo }) => {
  socketEvents({ setValue });
  connected(isDemo);
};