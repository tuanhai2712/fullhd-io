import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import { ActionTypes } from '@constants/index';

export const tfaStateDefault: tfaState = {
  qrCode: "",
  tfaEnabled: false,
  secret_code: ""
};


export default {
  tfa: handleActions(
    {
      [ActionTypes.ENABLE_TFA_SUCCESS]: (state, action) => {
        return update(state, {
          qrCode: { $set: action.payload.qrCode },
          secret_code: { $set: action.payload.secret_code }
        });
      },
      [ActionTypes.CLEAR_TFA_DATA]: (state, action) => {
        return update(state, {
          qrCode: { $set: "" },
          secret_code: { $set: "" },
          tfaEnabled: { $set: false }
        });
      },
      [ActionTypes.CONFIRM_VERIFY_CODE_SUCCESS]: (state, action) => {
        return update(state, {
          qrCode: { $set: "" },
          secret_code: { $set: "" },
          tfaEnabled: { $set: false }
        });
      },
      [ActionTypes.OPEN_LOGIN_WITH_TFA]: (state, action) => {
        return update(state, {
          tfaEnabled: { $set: action.payload.tfaEnabled }
        });
      },
      [ActionTypes.DISABLE_TFA_SUCCESS]: (state, action) => {
        return update(state, {
          tfaEnabled: { $set: false }
        });
      },
    },
    tfaStateDefault
  ),
};
