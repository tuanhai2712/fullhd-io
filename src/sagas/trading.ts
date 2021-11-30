import { all, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '@constants/index';
import TradingApi from '@services/api/TradingApi';

export function* getTradingData() {
  try {
    let response = yield TradingApi.getTradingData();
    if (response.status !== 200) {
      throw new Error(response.message);
    }

    yield put({
      type: ActionTypes.TRADING_GET_SUCCESS,
      payload: {
        tradingData: response.data.tradingData,
      },
    });
  } catch (err) {
    yield put({
      type: ActionTypes.TRADING_GET_FAILURE,
      payload: err,
    });
  }
}

export function* getTradingHistories({ payload }: any) {
  try {
    const response: ITradingHistoryResponse = yield TradingApi.getTradingHistories(payload);

    if (response.status !== 200) {
      throw new Error(response.message);
    }

    yield put({
      type: ActionTypes.TRADING_GET_HISTORIES_SUCCESS,
      payload: {
        tradingHistories: {
          data: response.data,
          hasMore: response.data.length > 0
        }
      },
    });
  } catch (err) {
    yield put({
      type: ActionTypes.TRADING_GET_HISTORIES_FAILURE,
      payload: err,
    });
  }
}

export function* getTradingRankingSystems() {
  // try {
  //   const response: IRankingSystemsResponse = yield TradingApi.getTradingRankingSystems();

  //   if (response.status !== 200) {
  //     throw new Error(response.message);
  //   }

  //   yield put({
  //     type: ActionTypes.TRADING_GET_RANKING_SYSTEMS_SUCCESS,
  //     payload: {
  //       rankingSystems: response.data.rankingSystems,
  //     },
  //   });
  // } catch (err) {
  //   yield put({
  //     type: ActionTypes.TRADING_GET_RANKING_SYSTEMS_FAILURE,
  //     payload: err,
  //   });
  // }
}

export default function* root() {
  yield all([
    takeLatest(ActionTypes.TRADING_GET, getTradingData),
    takeLatest(ActionTypes.TRADING_GET_HISTORIES, getTradingHistories),
    takeLatest(ActionTypes.TRADING_GET_RANKING_SYSTEMS, getTradingRankingSystems),
  ]);
}
