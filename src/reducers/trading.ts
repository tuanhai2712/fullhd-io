import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { ActionTypes } from '@constants/index';

export const tradingStateDefault: tradingState = {
  tradingData: [],
  actionStatus: 0, //buy success : 1, buy fail : 2, sell success: 3, sell fail: 4
  isShowToggleSidebar: false,
  tradingHistories: {
    data: [],
    hasMore: true,
  },
  tradeTransaction: {},
  rankingSystems: [],
  sideBarPage: '',
};

export default {
  trading: handleActions(
    {
      // [ActionTypes.TRADING_GET]: state => immutable(state, { 'tradingData': { $set: [] } }),
      [ActionTypes.TRADING_GET_SUCCESS]: (state, action) => {
        const { tradingData } = action.payload;
        return immutable(state, {
          tradingData: {
            $set: tradingData,
          },
        });
      },
      [ActionTypes.BUY_COINS_SUCCESS]: (state, action) => {
        return immutable(state, {
          actionStatus: { $set: 1 },
        });
      },
      [ActionTypes.BUY_COINS_FAILURE]: (state, action) => {
        return immutable(state, {
          actionStatus: { $set: 2 },
        });
      },

      [ActionTypes.SELL_COINS_SUCCESS]: (state, action) => {
        return immutable(state, {
          actionStatus: { $set: 3 },
        });
      },
      [ActionTypes.SELL_COINS_FAILURE]: (state, action) => {
        return immutable(state, {
          actionStatus: { $set: 4 },
        });
      },

      [ActionTypes.SHOW_TOGGLE_SIDEBAR]: (state, action) => {
        const { sideBarPage } = action.payload;
        return immutable(state, {
          isShowToggleSidebar: { $set: true },
          sideBarPage: { $set: sideBarPage },
        });
      },
      [ActionTypes.HIDE_TOGGLE_SIDEBAR]: (state, action) => {
        return immutable(state, {
          isShowToggleSidebar: { $set: false },
        });
      },

      [ActionTypes.TRADING_GET_HISTORIES_SUCCESS]: (state, action) => {
        const { tradingHistories } = action.payload;
        return immutable(state, {
          tradingHistories: {
            data: { $push: tradingHistories.data },
            hasMore: { $set: tradingHistories.hasMore },
          },
        });
      },

      [ActionTypes.ADD_TRANSACTION_TRADE_HISTORY]: (state, action) => {
        const { tradeTransaction } = action.payload;
        return immutable(state, {
          tradeTransaction: { $set: tradeTransaction },
        });
      },

      [ActionTypes.DELETE_TRANSACTION_TRADE_HISTORY]: (state, action) => {
        return immutable(state, {
          tradeTransaction: { $set: {} },
        });
      },

      [ActionTypes.TRADING_GET_HISTORIES_FAILURE]: (state, action) => {
        return immutable(state, {
          tradingHistories: {
            data: { $set: [] },
            hasMore: { $set: false },
          },
        });
      },

      [ActionTypes.TRADING_GET_RANKING_SYSTEMS_SUCCESS]: (state, action) => {
        const { rankingSystems } = action.payload;
        return immutable(state, {
          rankingSystems: { $set: rankingSystems },
        });
      },
      [ActionTypes.TRADING_GET_RANKING_SYSTEMS_FAILURE]: (state, action) => {
        return immutable(state, {
          rankingSystems: { $set: [] },
        });
      },
    },
    tradingStateDefault
  ),
};
