import { socket } from './index';
import * as utils from '@utils/utils';
import { typeEmit } from "./types";

export const connected = (isDemo: boolean) => {
  let token = isDemo ? utils.getStorage('demoToken') : utils.getStorage('authToken');
  socket.emit(typeEmit.AUTHENTICATE, { token: token }); //Token
  // socket.emit(typeEmit.GET_SYMBOL, 'btcusdt');
};

// export const buySell = (buyMoney: number, sellMoney: number) => {
//   socket.emit('command', { symbol: 'btcusdt', buy: buyMoney, sell: sellMoney });
// };
