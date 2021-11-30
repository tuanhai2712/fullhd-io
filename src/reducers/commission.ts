import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import { ActionTypes } from '@constants/index';


export const commissionStateDefault: commissionState = {
  commissionStatistic: {
    commissionNotWithdrawal: 0,
    ibCommissionNotWithdrawal: 0,
    level: 0,
    totalCommission: 0,
    totalUserBuyIB: 0,
    totalVolumeInWeek: 0,
  },
  commissionDetail: {},
  commissionVolume: {},
  commissionIB: {},
  memberList: {},
};


export default {
  commission: handleActions(
    {
      [ActionTypes.GET_COMMISSION_STATISTIC_SUCCESS]: (state, action) => {
        return update(state, {
          commissionStatistic: { $set: {
              ...action.payload,
            }
          },
        });
      },
      [ActionTypes.WITHDRAWAL_REF_PROFIT_SUCCESS]: (state, action) => {
        return update(state, {
          commissionStatistic: { $set: {
              ...state.commissionStatistic,
              ...action.payload,
            }
          },
        });
      },
      [ActionTypes.WITHDRAWAL_IB_PROFIT_SUCCESS]: (state, action) => {
        return update(state, {
          commissionStatistic: { $set: {
              ...state.commissionStatistic,
              ...action.payload,
            }
          },
        });
      },
      [ActionTypes.GET_COMMISSION_DETAIL_SUCCESS]: (state, action) => {
        return update(state, {
          commissionDetail: { $set: {
            ...action.payload,
            }
          },
        });
      },
      [ActionTypes.GET_COMMISSION_VOLUME_SUCCESS]: (state, action) => {
        return update(state, {
          commissionVolume: { $set: {
            ...action.payload,
            }
          },
        });
      },
      [ActionTypes.GET_COMMISSION_IB_SUCCESS]: (state, action) => {
        return update(state, {
          commissionIB: { $set: {
            ...action.payload,
            }
          },
        });
      },
      [ActionTypes.GET_MEMBER_LIST_SUCCESS]: (state, action) => {
        return update(state, {
          memberList: { $set: {
            ...action.payload,
            }
          },
        });
      },
    },
    commissionStateDefault
  ),
};
