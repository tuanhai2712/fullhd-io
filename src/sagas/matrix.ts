import { all, put, takeLatest, select } from 'redux-saga/effects';
import { ActionTypes } from '@constants/index';
import MatrixApi from '@services/api/MatrixApi';
import { func } from 'prop-types';

export function* getMatrix(payload: any) {
  //user list
  try {
    let response = yield MatrixApi.getMatrix(payload.conditions);
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    yield put({
      type: ActionTypes.GET_MATRIX_LIST_SUCCESS,
      payload: response.payload
    });
  } catch (err) {
    yield put({
      type: ActionTypes.GET_MATRIX_LIST_FAILURE,
      payload: err
    });
  }
}

export function* getMatrixDraw(payload: any) {
  try {
    const { packageId } = payload.conditions;
    let response = yield MatrixApi.getMatrixDraw(packageId);
    if (response.status !== 200) {
      yield put({
        type: ActionTypes.GET_MATRIX_DRAW_FAILURE,
        payload: {
          message: 'Get Matrix Chart failed !!!'
        }
      });
    }
    yield put({
      type: ActionTypes.GET_MATRIX_DRAW_SUCCESS,
      payload: response.payload
    });
  } catch (err) {
    yield put({
      type: ActionTypes.GET_MATRIX_DRAW_FAILURE,
      payload: err
    });
  }
}

export function* upgradePackage(payload: any) {
  try {
    let response = yield MatrixApi.upgradePackage(payload.conditions);
    if (response.status !== 200) {
      yield put({
        type: ActionTypes.UPGRADE_PACKAGE_FAILURE,
        payload: {
          message: 'Buy package failed !!!'
        }
      });
    }
    yield put({
      type: ActionTypes.UPGRADE_PACKAGE_SUCCESS,
      payload: response.payload
    });
  } catch (err) {
    yield put({
      type: ActionTypes.UPGRADE_PACKAGE_FAILURE,
      payload: err
    });
  }
}
export function* withdrawal(payload: any) {
  try {
    const { userInfo } = yield select(state => state.user);
    let response = yield MatrixApi.withdrawal(payload.password);
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    yield put({
      type: ActionTypes.WITHDRAWAL_MATRIX_SUCCESS,
      payload: response.payload
    });
    yield put({
      type: ActionTypes.UPDATE_USER_INFOR,
      payload: { amount: userInfo.amount + payload.commission_balance }
    });
  } catch (err) {
    yield put({
      type: ActionTypes.WITHDRAWAL_MATRIX_FAILURE,
      payload: err
    });
  }
}

export function* getAllPackages() {
  try {
    let response = yield MatrixApi.getAllPackages();
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    yield put({
      type: ActionTypes.GET_ALL_PACKAGE_SUCCESS,
      payload: response.payload
    });
  } catch (err) {
    yield put({
      type: ActionTypes.GET_ALL_PACKAGE_FAILURE,
      payload: err
    });
  }
}

export function* setAutoUpgrade() {
  try {
    let response = yield MatrixApi.setAutoUpgrade();
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    yield put({
      type: ActionTypes.SET_AUTO_UPGRADE_SUCCESS,
      payload: response.payload
    });
  } catch (err) {
    yield put({
      type: ActionTypes.SET_AUTO_UPGRADE_FAILURE,
      payload: err
    });
  }
}

export function* setPackage(payload: any) {
  yield put({
    type: ActionTypes.SET_CURRENT_PACKAGE_SUCCESS,
    payload: {
      currentPackage: payload.conditions.currentPackage
    }
  });
}

export function* getMatrixInformationOfUser(payload: any) {
  try {
    let response = yield MatrixApi.getMatrixInformationOfUser();
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    yield put({
      type: ActionTypes.GET_MATRIX_INFORMATION_OF_USER_SUCCESS,
      payload: response.payload
    });
  } catch (err) {
    yield put({
      type: ActionTypes.GET_MATRIX_INFORMATION_OF_USER_FAILURE,
      payload: err
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(ActionTypes.GET_ALL_PACKAGE, getAllPackages),
    takeLatest(ActionTypes.GET_MATRIX_LIST, getMatrix),
    takeLatest(ActionTypes.SET_CURRENT_PACKAGE, setPackage),
    takeLatest(
      ActionTypes.GET_MATRIX_INFORMATION_OF_USER,
      getMatrixInformationOfUser
    ),
    takeLatest(ActionTypes.SET_AUTO_UPGRADE, setAutoUpgrade),
    takeLatest(ActionTypes.UPGRADE_PACKAGE, upgradePackage),
    takeLatest(ActionTypes.WITHDRAWAL_MATRIX_REQUEST, withdrawal),
    takeLatest(ActionTypes.GET_MATRIX_DRAW, getMatrixDraw)
  ]);
}
