import { socket } from "./index";
import { typeEvents } from "./types";

export const socketEvents = ({ setValue }) => {
  socket.off(typeEvents.BOT_TRADE).on(typeEvents.BOT_TRADE, (botTrade) => {
    setValue((state) => ({ ...state, botTrade: botTrade }));
  });
  // socket.off(typeEvents.COMMIT);
  socket.off(typeEvents.AMOUNT_CHANGING).on(typeEvents.AMOUNT_CHANGING, (amount) => {
    setValue((state) => ({ ...state, amount: amount }));
  });
  // socket.off(typeEvents.WIN).on(typeEvents.WIN, (win) => {
  //   setValue((state) => ({ ...state, win: win }));
  // });
  socket.off(typeEvents.LOAD_BLOCKS).on(typeEvents.LOAD_BLOCKS, (reason) => {
    if (reason.length > 0) {
      let newData = [...reason];
      newData.push(newData[newData.length - 1]);
      setValue((state) => ({ ...state, tradingData: newData, isLoadBlocks: true }));
    }

    socket.off(typeEvents.COMMIT).on(typeEvents.COMMIT, (data) => {
      setValue((state) => ({
        ...state,
        finalCandle: data.data[0],
        isOpen: data.data[0].is_open,
        tick: data.ticking,
        isLoadBlocks: false,
      }));
    });
  });
  socket
    .off(typeEvents.AI_ROOM_FIRST_DATA)
    .on(typeEvents.AI_ROOM_FIRST_DATA, (aiFirstData: { x: Number; y: Number }[]) => {
      setValue((state) => ({ ...state, aiFirstData }));
    });
};
