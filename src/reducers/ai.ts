import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import { ActionTypes } from '@constants/index';

export const aiRobotStateDefault: aiRobotState = {
  aiBot: {},
  configRates: {},
  aiCommission: {},
  aiHistories: {},
  totalAICommission: {},
};


export default {
  aiRobot: handleActions(
    {
      [ActionTypes.GET_AI_BOT_SUCCESS]: (state, action) => {
        return update(state, {
          aiBot: { $set: action.payload },
        });
      },
      [ActionTypes.BUY_AI_ROBOT_SUCCESS]: (state, action) => {
        return update(state, {
          aiBot: { $set: action.payload },
        });
      },
      [ActionTypes.REFUND_INVESTMENT_SUCCESS]: (state, action) => {
        return update(state, {
          aiBot: { $set: action.payload },
        });
      },

      [ActionTypes.ADD_INVESTMENT_SUCCESS]: (state, action) => {
        return update(state, {
          aiBot: { $set: action.payload },
        })
      },

      [ActionTypes.WITHDRAWAL_INVESTMENT_PROFIT_SUCCESS]: (state, action) => {
        return update(state, {
          aiBot: { $set: action.payload },
        })
      },

      [ActionTypes.WITHDRAWAL_AI_COMMISSION_SUCCESS]: (state, action) => {
        return update(state, {
          totalAICommission: { $set: action.payload },
        })
      },

      [ActionTypes.GET_CONFIG_RATES_SUCCESS]: (state, action) => {
        return update(state, {
          configRates: { $set: action.payload },
        })
      },
      
      [ActionTypes.GET_AI_COMMISSION_SUCCESS]: (state, action) => {
        return update(state, {
          aiCommission: { $set: action.payload },
        })
      },
      [ActionTypes.GET_TOTAL_COMMISSION_AI_SUCCESS]: (state, action) => {
        return update(state, {
          totalAICommission: { $set: action.payload },
        })
      },
      [ActionTypes.GET_AI_HISTORIES_SUCCESS]: (state, action) => {
        return update(state, {
          aiHistories: { $set: action.payload },
        })
      },

    },
    aiRobotStateDefault
  ),
};
