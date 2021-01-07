import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as userApi from "../api/userApi";
import * as actionTypes from "../actions/actionTypes";

function* getAllUser() {
  try {
    const res = yield call(userApi.getAllUser);
    yield put(actions.getAllUserSuccess(res));
  } catch (e) {
    yield put(actions.addLog(e));
  }
}

function* getSingleUser(action) {
  try {
    const res = yield call(userApi.getSingleUser, action.data);
    yield put(actions.getSingleUserSuccess(res));
  } catch (e) {
    yield put(actions.addLog(e));
  }
}

function* createUser(action) {
  try {
    yield call(userApi.createUser, action.data);
    yield put(actions.createUserSuccess);
  } catch (e) {
    yield put(actions.addLog(e));
  }
}

function* updateUser(action) {
  try {
    yield call(userApi.updateUser, action.data);
    yield put(actions.updateUserSuccess);
  } catch (e) {
    yield put(actions.addLog(e));
  }
}

function* deleteUser(action) {
  try {
    yield call(userApi.deleteUser, action.data);
    yield put(actions.deleteUserSuccess);
  } catch (e) {
    yield put(actions.addLog(e));
  }
}

export default function* userSaga() {
  yield takeLatest(actionTypes.GET_ALL_CATEGORY, getAllUser);
  yield takeLatest(actionTypes.GET_SINGLE_CATEGORY, getSingleUser);
  yield takeLatest(actionTypes.CREATE_CATEGORY, createUser);
  yield takeLatest(actionTypes.UPDATE_CATEGORY, updateUser);
  yield takeLatest(actionTypes.DELETE_CATEGORY, deleteUser);
}
