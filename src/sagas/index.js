import { all } from "redux-saga/effects";
import categorySaga from "./categorySaga";
import userSaga from "./userSaga";
import foodSaga from "./foodSaga";

export default function* rootSaga() {
  yield all([categorySaga(), userSaga(), foodSaga()]);
}
