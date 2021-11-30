import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';
import update from 'immutability-helper';
import { ActionTypes } from '@constants/index';

export const userStateDefault: userState = {
  isDemo: false,
  showDemoErr: false,
  emailLoginEnabled: false,
  userInfo: {},
  userDemoInfo: {},
  bonus: {
    showBonusAt: ''
  }
};

export default {
  user: handleActions(
    {
      [ActionTypes.LOGOUT]: (state, action) => {
        localStorage.clear();
        return update(state, {
          userInfo: { $set: {} },
          userDemoInfo: { $set: {} },
          isDemo: { $set: false },
          showDemoErr: { $set: false },
          emailLoginEnabled: { $set: false }
        });
      },
      [ActionTypes.OPEN_LOGIN_WITH_EMAIL]: (state, action) => {
        return update(state, {
          emailLoginEnabled: { $set: action.payload.emailLoginEnabled }
        });
      },
      [ActionTypes.UPDATE_USER_INFOR]: (state, action) => {
        return update(state, {
          userInfo: {
            $set: {
              ...state.userInfo,
              ...action.payload
            }
          }
        });
      },

      [ActionTypes.UPDATE_USER_DEMO_INFOR]: (state, action) => {
        return update(state, {
          userDemoInfo: {
            $set: action.payload
          }
        });
      },

      [ActionTypes.SWITCH_ACCOUNT_SUCCESS]: (state, action) => {
        const { isDemo } = action.payload;
        return immutable(state, {
          isDemo: { $set: isDemo }
        });
      },
      [ActionTypes.GET_BONUS_STATUS_SUCCESS]: (state, action) => {
        return update(state, {
          bonus: {
            $set: {
              ...action.payload.bonus
            }
          }
        });
      },
      [ActionTypes.UPDATE_BONUS_FLAG_SUCCESS]: (state, action) => {
        return update(state, {
          bonus: {
            $set: {
              showBonusAt: ''
            }
          }
        });
      },
      [ActionTypes.SHOW_ERROR_DEMO]: (state, action) => {
        const show = action.payload;
        return immutable(state, { showDemoErr: { $set: show } });
      }
    },
    userStateDefault
  )
};
