import { all, put, takeLatest, select, call } from 'redux-saga/effects';
import { ActionTypes } from '@constants/index';
import CommissionApi from '@services/api/CommissionApi';
import moment from 'moment';

export function* getCommissionStatistic() {
  try {
    let response = yield CommissionApi.getCommissionStatistic();
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    yield put({
      type: ActionTypes.GET_COMMISSION_STATISTIC_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    yield put({
      type: ActionTypes.GET_COMMISSION_STATISTIC_FAILURE,
      payload: err.response
    });
  }
}
export function* withdrawalRefProfit(payload: any) {
  try {
    const { userInfo } = yield select((state) => state.user)
    yield CommissionApi.withdrawalRefProfit(payload.password);
    yield call(getCommissionStatistic)
    yield put({
      type: ActionTypes.WITHDRAWAL_REF_PROFIT_SUCCESS,
    });
    
    yield put({
      type: ActionTypes.UPDATE_USER_INFOR,
      payload: {amount: userInfo.amount + payload.profit}
    });
  } catch (err) {
    yield put({
      type: ActionTypes.WITHDRAWAL_REF_PROFIT_FAILURE,
      payload: err
    });
  }
}

export function* withdrawalIBProfit(payload: any) {
  try {
    const { userInfo } = yield select((state) => state.user)
    yield CommissionApi.withdrawalIBProfit(payload.password);
    yield call(getCommissionStatistic)
    yield put({
      type: ActionTypes.UPDATE_USER_INFOR,
      payload: {amount: userInfo.amount + payload.profit}
    });
    yield put({
      type: ActionTypes.WITHDRAWAL_IB_PROFIT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: ActionTypes.WITHDRAWAL_IB_PROFIT_FAILURE,
      payload: err
    });
  }
}

export function* getCommissionDetail(payload: any) {
  try {
    let response = yield CommissionApi.getCommissionDetail(payload.conditions);
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    yield put({
      type: ActionTypes.GET_COMMISSION_DETAIL_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    yield put({
      type: ActionTypes.GET_COMMISSION_DETAIL_FAILURE,
      payload: err.response
    });
  }
}

export function* getCommissionVolume(payload: any) {
  try {
    let response = yield CommissionApi.getCommissionVolume(payload.conditions);
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    yield put({
      type: ActionTypes.GET_COMMISSION_VOLUME_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    yield put({
      type: ActionTypes.GET_COMMISSION_VOLUME_FAILURE,
      payload: err.response
    });
  }
}

export function* getCommissionIB(payload: any) {
  try {
    let response = yield CommissionApi.getCommissionIB(payload.conditions);
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    yield put({
      type: ActionTypes.GET_COMMISSION_IB_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    yield put({
      type: ActionTypes.GET_COMMISSION_IB_FAILURE,
      payload: err.response
    });
  }
}

export function* getMemberList(payload: any) {
  try {
    let response = yield CommissionApi.getMemberList(payload.conditions);
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    yield put({
      type: ActionTypes.GET_MEMBER_LIST_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    yield put({
      type: ActionTypes.GET_MEMBER_LIST_FAILURE,
      payload: err.response
    });
  }
}

export function* buyIB() {
  try {
    const { userInfo } = yield select((state) => state.user)
    yield CommissionApi.buyIB();
    yield put({
      type: ActionTypes.BUY_IB_SUCCESS,
    });
    yield put({
      type: ActionTypes.UPDATE_USER_INFOR,
      payload: {
        is_ib: true,
        amount: userInfo.amount - 100,
        buy_ib_at: moment()
      }
    });
  } catch (err) {
    yield put({
      type: ActionTypes.BUY_IB_FAILURE,
      payload: err.response
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(ActionTypes.BUY_IB_REQUEST, buyIB),
    takeLatest(ActionTypes.GET_COMMISSION_STATISTIC_REQUEST, getCommissionStatistic),
    takeLatest(ActionTypes.WITHDRAWAL_REF_PROFIT_REQUEST, withdrawalRefProfit),
    takeLatest(ActionTypes.WITHDRAWAL_IB_PROFIT_REQUEST, withdrawalIBProfit),
    takeLatest(ActionTypes.GET_COMMISSION_DETAIL_REQUEST, getCommissionDetail),
    takeLatest(ActionTypes.GET_COMMISSION_VOLUME_REQUEST, getCommissionVolume),
    takeLatest(ActionTypes.GET_COMMISSION_IB_REQUEST, getCommissionIB),
    takeLatest(ActionTypes.GET_MEMBER_LIST_REQUEST, getMemberList),
  ]);
}



