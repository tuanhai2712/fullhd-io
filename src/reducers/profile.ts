import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import { ActionTypes } from '@constants/index';

export const profileStateDefault: profileState = {
  level: 0,
  totalCommission: 0,
  totalVolumeInWeek: 0,
  totalUserBuyIB: 0,
  ibCommissionNotWithdrawal: 0,
  commissionNotWithdrawal: 0,
  totalChild: 0,
  totalF1Child: 0,
  userRanking: 0,
  bonusMoney: 0
};

export default {
  profile: handleActions(
    {
      [ActionTypes.GET_USER_PROFILE_SUCCESS]: (state, action) => {
        return update(state, { $set: { ...action.payload } });
      },
      [ActionTypes.UPDATE_BONUS_FLAG_SUCCESS]: (state, action) => {
        return update(state, {
          bonusMoney: { $set: 0 },
        });
      }
    },
    profileStateDefault
  )
};
