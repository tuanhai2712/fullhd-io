import { all, fork } from "redux-saga/effects";

import user from "./user";
import trading from "./trading";
import commission from "./commission";
import matrix from "./matrix";
import airobot from './airobot';

export default function* root() {
  yield all([fork(user)]);
  yield all([fork(trading)]);
  yield all([fork(matrix)]);
  yield all([fork(airobot)]);
  yield all([fork(commission)]);
}
