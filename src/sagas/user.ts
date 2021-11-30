import { all, put, takeLatest, call, takeLeading } from 'redux-saga/effects';
import { ActionTypes } from '@constants/index';
import UserApi from '@services/api/UserApi';
import CommondApi from '@services/api/CommondApi';
import { connected } from '@utils/sockets/emit';
import * as utils from '@utils/utils';

export function* login({ payload }: any) {
  try {
    const response = yield UserApi.login({
      identity: payload.identity.toLowerCase(),
      password: payload.password
    });
    utils.setStorage('authToken', response.data.token);
    yield put({
      type: ActionTypes.UPDATE_USER_INFOR,
      payload: response.data.user_info
    });
    payload.history.push(payload.previousPath);
    yield call(getUserProfile);
  } catch (err) {
    if (
      err.response.data.data.message ===
      'Please enter verify code in your email'
    ) {
      yield put({
        type: ActionTypes.OPEN_LOGIN_WITH_EMAIL,
        payload: { emailLoginEnabled: true }
      });
    }
    if (err.response.data.data.message === 'TFA is enabled') {
      yield put({
        type: ActionTypes.OPEN_LOGIN_WITH_TFA,
        payload: { tfaEnabled: true }
      });
      yield put({
        type: ActionTypes.CLEAR_FETCHING
      });
    } else {
      yield put({
        type: ActionTypes.LOGIN_FAILURE,
        payload: err
      });
    }
  }
}
export function* loginWithTFA({ payload }: any) {
  try {
    payload.identity = payload.identity.toLowerCase();
    let response = yield UserApi.tfaLogin(payload);
    utils.setStorage('authToken', response.data.token);
    yield put({
      type: ActionTypes.UPDATE_USER_INFOR,
      payload: response.data.user_info
    });
    payload.history.push(payload.previousPath);
    yield call(getUserProfile);
  } catch (err) {
    yield put({
      type: ActionTypes.LOGIN_FAILURE,
      payload: err
    });
  }
}

export function* register({ payload }: any) {
  try {
    payload.values.username = payload.values.username.toLowerCase();
    let response = yield UserApi.register(payload.values);

    if (response.status !== 201) {
      throw new Error(response.message);
    }

    yield put({
      type: ActionTypes.USER_REGISTER_SUCCESS
    });
  } catch (err) {
    yield put({
      type: ActionTypes.USER_REGISTER_FAILURE,
      payload: err
    });
  }
}

export function* updateUserProfile({ payload }: any) {
  try {
    let response = yield UserApi.updateUserProfile(payload);

    if (response.status !== 200) {
      throw new Error(response.message);
    }
    yield put({
      type: ActionTypes.UPDATE_USER_PROFILE_SUCCESS
    });
    yield put({
      type: ActionTypes.UPDATE_USER_INFOR,
      payload: {
        phone: response.data.item.phone,
        full_name: response.data.item.full_name
      }
    });
  } catch (err) {
    yield put({
      type: ActionTypes.UPDATE_USER_PROFILE_FAILURE,
      payload: err
    });
  }
}

export function* getUserProfile() {
  try {
    let response = yield UserApi.getUserProfile();
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    yield put({
      type: ActionTypes.GET_USER_PROFILE_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    yield put({
      type: ActionTypes.GET_USER_PROFILE_FAILURE,
      payload: err
    });
  }
}

export function* changePassword({ payload }: any) {
  try {
    let response = yield UserApi.changePassword(payload);
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    yield put({
      type: ActionTypes.CHANGE_PASSWORD_SUCCESS
    });
    utils.removeStorage('authToken');
  } catch (err) {
    yield put({
      type: ActionTypes.CHANGE_PASSWORD_FAILURE,
      payload: err
    });
  }
}

export function* addDemoMoney() {
  try {
    const response = yield CommondApi.addDemoMoney();
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    yield put({
      type: ActionTypes.ADD_DEMO_MONEY_SUCCESS
    });
    yield put({
      type: ActionTypes.UPDATE_USER_DEMO_INFOR,
      payload: {
        amount: parseInt(response.data.amount.$numberDecimal)
      }
    });
    connected(true);
  } catch (err) {
    yield put({
      type: ActionTypes.ADD_DEMO_MONEY_FAILURE,
      payload: err
    });
  }
}

export function* getBonusStatus() {
  try {
    const response = yield UserApi.getBonusStatus();
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    yield put({
      payload: {
        bonus: response.data
      },
      type: ActionTypes.GET_BONUS_STATUS_SUCCESS
    });
  } catch (err) {
    yield put({
      type: ActionTypes.GET_BONUS_STATUS_FAILURE,
      payload: err
    });
  }
}

export function* switchAccount({ payload }: any) {
  try {
    const response = yield CommondApi.switchAccount();
    if (response.data.isDemo) {
      utils.setStorage('demoToken', response.data.token);
    } else {
      utils.setStorage('authToken', response.data.token);
      utils.removeStorage('demoToken');
    }
    yield put({
      type: ActionTypes.SWITCH_ACCOUNT_SUCCESS,
      payload: {
        isDemo: response.data.isDemo
      }
    });
    if (response.data.isDemo) {
      yield put({
        type: ActionTypes.UPDATE_USER_DEMO_INFOR,
        payload: response.data.userData
      });
    } else {
      yield put({
        type: ActionTypes.UPDATE_USER_INFOR,
        payload: response.data.userData
      });
    }
    connected(response.data.isDemo);
  } catch (err) {
    yield put({
      type: ActionTypes.SWITCH_ACCOUNT_FAILURE,
      payload: err
    });
  }
}

export function* enableTFA() {
  try {
    let response = yield UserApi.enableTFA();
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    yield put({
      type: ActionTypes.ENABLE_TFA_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    yield put({
      type: ActionTypes.ENABLE_TFA_FAILURE,
      payload: err
    });
  }
}

export function* sendRequestResetPassword({ payload }: any) {
  try {
    const { email } = payload;
    let response = yield UserApi.sendRequestResetPassword(email);
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    yield put({
      type: ActionTypes.RESET_PASSWORD_SUCCESS
    });
  } catch (err) {
    yield put({
      type: ActionTypes.RESET_PASSWORD_FAILURE,
      payload: err
    });
  }
}

export function* updateBonusFlag() {
  try {
    const response = yield UserApi.updateBonusFlag();
    yield put({
      type: ActionTypes.UPDATE_USER_INFOR,
      payload: { amount: response.data.amount.$numberDecimal }
    });
    yield put({
      type: ActionTypes.UPDATE_BONUS_FLAG_SUCCESS
    });
  } catch (error) {
    yield put({
      type: ActionTypes.UPDATE_BONUS_FLAG_FAILURE,
      payload: error
    });
  }
}

export function* disableTFA() {
  try {
    yield UserApi.disableTFA();
    yield put({
      type: ActionTypes.DISABLE_TFA_SUCCESS
    });
    yield put({
      type: ActionTypes.UPDATE_USER_INFOR,
      payload: {
        is_tfa_enabled: false
      }
    });
    yield put({
      type: ActionTypes.OPEN_LOGIN_WITH_TFA,
      payload: { tfaEnabled: false }
    });
  } catch (err) {
    yield put({
      type: ActionTypes.DISABLE_TFA_FAILURE,
      payload: err
    });
  }
}

export function* confirmVerifyCode({ payload }: any) {
  try {
    yield UserApi.confirmVerifyCode(payload.verify_code);
    yield put({
      type: ActionTypes.CONFIRM_VERIFY_CODE_SUCCESS
    });
    yield put({
      type: ActionTypes.UPDATE_USER_INFOR,
      payload: {
        is_tfa_enabled: true
      }
    });
  } catch (err) {
    yield put({
      type: ActionTypes.CONFIRM_VERIFY_CODE_FAILURE,
      payload: err
    });
  }
}
export function* confirmResetPassword({ payload }: any) {
  try {
    let response = yield UserApi.confirmResetPassword(payload);
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    yield put({
      type: ActionTypes.CONFIRM_RESET_PASSWORD_SUCCESS
    });
  } catch (err) {
    yield put({
      type: ActionTypes.CONFIRM_RESET_PASSWORD_FAILURE,
      payload: err.response
    });
  }
}

export function* loginEmail({ payload }: any) {
  try {
    const response = yield UserApi.loginEmail({
      identity: payload.identity.toLowerCase(),
      password: payload.password,
      login_code: payload.login_code
    });
    utils.setStorage('authToken', response.data.token);
    yield put({
      type: ActionTypes.UPDATE_USER_DEMO_INFOR,
      payload: {
        amount: response.data.demo_amount
      }
    });
    yield put({
      type: ActionTypes.UPDATE_USER_INFOR,
      payload: response.data.user_info
    });
    yield call(getUserProfile);
    window.location.href = payload.previousPath;
  } catch (err) {
    yield put({
      type: ActionTypes.CONFIRM_REGISTRATION_FAILURE,
      payload: err
    });
  }
}

export function* registrationConfirm({ payload }: any) {
  try {
    yield UserApi.registrationConfirm(payload);
    yield put({
      type: ActionTypes.CONFIRM_REGISTRATION_SUCCESS
    });
  } catch (err) {
    yield put({
      type: ActionTypes.CONFIRM_REGISTRATION_FAILURE,
      payload: err
    });
  }
}

export function* getLoginTokenAgain({ payload }: any) {
  try {
    yield UserApi.getLoginTokenAgain(payload);
    yield put({
      type: ActionTypes.GET_EMAIL_TOKEN_SUCCESS
    });
  } catch (err) {
    yield put({
      type: ActionTypes.GET_EMAIL_TOKEN_FAILURE,
      payload: err
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(ActionTypes.LOGIN_REQUEST, login),
    takeLatest(ActionTypes.LOGIN_WITH_TFA, loginWithTFA),
    takeLatest(ActionTypes.USER_REGISTER_REQUEST, register),
    takeLatest(ActionTypes.CONFIRM_REGISTRATION_REQUEST, registrationConfirm),
    takeLatest(ActionTypes.UPDATE_USER_PROFILE_REQUEST, updateUserProfile),
    takeLatest(ActionTypes.CHANGE_PASSWORD_REQUEST, changePassword),
    takeLatest(ActionTypes.ENABLE_TFA_REQUEST, enableTFA),
    takeLatest(ActionTypes.SWITCH_ACCOUNT_REQUEST, switchAccount),
    takeLatest(ActionTypes.DISABLE_TFA_REQUEST, disableTFA),
    takeLatest(ActionTypes.CONFIRM_VERIFY_CODE_REQUEST, confirmVerifyCode),
    takeLatest(ActionTypes.ADD_DEMO_MONEY, addDemoMoney),
    takeLatest(ActionTypes.RESET_PASSWORD_REQUEST, sendRequestResetPassword),
    takeLatest(ActionTypes.GET_BONUS_STATUS_REQUEST, getBonusStatus),
    takeLeading(ActionTypes.UPDATE_BONUS_FLAG_REQUEST, updateBonusFlag),
    takeLatest(ActionTypes.LOGIN_EMAIL_REQUEST, loginEmail),
    takeLatest(
      ActionTypes.CONFIRM_RESET_PASSWORD_REQUEST,
      confirmResetPassword
    ),
    takeLatest(ActionTypes.GET_EMAIL_TOKEN_REQUEST, getLoginTokenAgain),
    takeLatest(ActionTypes.GET_USER_PROFILE_REQUEST, getUserProfile)
  ]);
}
