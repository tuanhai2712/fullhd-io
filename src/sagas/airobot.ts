import { all, put, takeLatest, select } from 'redux-saga/effects';
import { ActionTypes } from '@constants/index';
import AIApi from '@services/api/AIApi';

export function* buyAIRobot(payload: any) {
  try {
    const { userInfo } = yield select((state) => state.user)
    let response = yield AIApi.buyAIRobot(payload.amount);
    yield put({
      type: ActionTypes.BUY_AI_ROBOT_SUCCESS,
      payload: response.data
    });
    yield put({
      type: ActionTypes.UPDATE_USER_INFOR,
      payload: {amount: userInfo.amount - payload.amount - 100}
    });
  } catch (err) {
    yield put({
      type: ActionTypes.BUY_AI_ROBOT_FAILURE,
      payload: err.response
    });
  }
}

export function* addInvestment(payload: any) {
  try {
    const { userInfo } = yield select((state) => state.user)
    let response = yield AIApi.addInvestment(payload.amount);
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    yield put({
      type: ActionTypes.ADD_INVESTMENT_SUCCESS,
      payload: response.data
    });
    yield put({
      type: ActionTypes.UPDATE_USER_INFOR,
      payload: {amount: userInfo.amount - payload.amount}
    });
  } catch (err) {
    yield put({
      type: ActionTypes.ADD_INVESTMENT_FAILURE,
      payload: err.response
    });
  }
}
export function* autoRefresh(payload: any) {
  try {
    let response = yield AIApi.autoRefresh(payload.auto_refresh);
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    yield put({
      type: ActionTypes.AUTO_REFRESH_AI_BOT_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    yield put({
      type: ActionTypes.AUTO_REFRESH_AI_BOT_FAILURE,
      payload: err.response
    });
  }
}

export function* getAIBot() {
  try {
    let response = yield AIApi.getAIBot();
    yield put({
      type: ActionTypes.GET_AI_BOT_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    yield put({
      type: ActionTypes.GET_AI_BOT_FAILURE,
      payload: err.response
    });
  }
}
export function* refundInvest(payload: any) {
  try {
    const { userInfo } = yield select((state) => state.user)
    let response = yield AIApi.refundInvest(payload.invest_id, payload.password);
    yield put({
      type: ActionTypes.REFUND_INVESTMENT_SUCCESS,
      payload: response.data
    });
    yield put({
      type: ActionTypes.UPDATE_USER_INFOR,
      payload: {amount: userInfo.amount + payload.investment}
    });
  } catch (err) {
    yield put({
      type: ActionTypes.REFUND_INVESTMENT_FAILURE,
      payload: err
    });
  }
}
export function* getConfigRates() {
  try {
    let response = yield AIApi.getConfigRates();
    yield put({
      type: ActionTypes.GET_CONFIG_RATES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    yield put({
      type: ActionTypes.GET_CONFIG_RATES_FAILURE,
      payload: err.response
    });
  }
}
export function* withdrawalInvestmentProfit(payload: any) {
  try {
    const { userInfo } = yield select((state) => state.user)
    let response = yield AIApi.withdrawalInvestmentProfit(payload.password);
    yield put({
      type: ActionTypes.WITHDRAWAL_INVESTMENT_PROFIT_SUCCESS,
      payload: response.data
    });
    yield put({
      type: ActionTypes.UPDATE_USER_INFOR,
      payload: {amount: userInfo.amount + payload.profit}
    });
  } catch (err) {
    yield put({
      type: ActionTypes.WITHDRAWAL_INVESTMENT_PROFIT_FAILURE,
      payload: err
    });
  }
}
export function* withdrawalAICommission(payload: any) {
  try {
    const { userInfo } = yield select((state) => state.user)
    yield AIApi.withdrawalAICommission(payload.password);
    yield put({
      type: ActionTypes.WITHDRAWAL_AI_COMMISSION_SUCCESS,
      payload: {commission_ib: 0}
    });
    yield put({
      type: ActionTypes.UPDATE_USER_INFOR,
      payload: {amount: userInfo.amount + payload.profit}
    });
  } catch (err) {
    yield put({
      type: ActionTypes.WITHDRAWAL_AI_COMMISSION_FAILURE,
      payload: err
    });
  }
}

export function* getAICommission(payload: any) {
  try {
    let response = yield AIApi.getAICommission(payload.conditions);
    yield put({
      type: ActionTypes.GET_AI_COMMISSION_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    yield put({
      type: ActionTypes.GET_AI_COMMISSION_FAILURE,
      payload: err.response
    });
  }
}

export function* getAIHistories(payload: any) {
  try {
    let response = yield AIApi.getAIHistories(payload.page);
    yield put({
      type: ActionTypes.GET_AI_HISTORIES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    yield put({
      type: ActionTypes.GET_AI_HISTORIES_FAILURE,
      payload: err.response
    });
  }
}

export function* getTotalCommissionAI() {
  try {
    let response = yield AIApi.getTotalCommissionAI();
    yield put({
      type: ActionTypes.GET_TOTAL_COMMISSION_AI_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    yield put({
      type: ActionTypes.GET_TOTAL_COMMISSION_AI_FAILURE,
      payload: err.response
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(ActionTypes.GET_AI_BOT_REQUEST, getAIBot),
    takeLatest(ActionTypes.GET_CONFIG_RATES_REQUEST, getConfigRates),
    takeLatest(ActionTypes.GET_AI_BOT_REQUEST, getTotalCommissionAI),
    takeLatest(ActionTypes.GET_AI_COMMISSION_REQUEST, getAICommission),
    takeLatest(ActionTypes.REFUND_INVESTMENT_REQUEST, refundInvest),
    takeLatest(ActionTypes.BUY_AI_ROBOT_REQUEST, buyAIRobot),
    takeLatest(ActionTypes.ADD_INVESTMENT_REQUEST, addInvestment),
    takeLatest(ActionTypes.WITHDRAWAL_INVESTMENT_PROFIT_REQUEST, withdrawalInvestmentProfit),
    takeLatest(ActionTypes.WITHDRAWAL_AI_COMMISSION_REQUEST, withdrawalAICommission),
    takeLatest(ActionTypes.GET_AI_HISTORIES_REQUEST, getAIHistories),
    takeLatest(ActionTypes.AUTO_REFRESH_AI_BOT, autoRefresh),
  ]);
}



