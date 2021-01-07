import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as foodApi from "../api/foodApi";
import * as actionTypes from "../actions/actionTypes";

function* getAllFood() {
  try {
    const res = yield call(foodApi.getAllFood);
    yield put(actions.getAllFoodSuccess(res));
  } catch (e) {
    yield put(actions.addLog(e));
  }
}

function* getSingleFood(action) {
  try {
    const res = yield call(foodApi.getSingleFood, action.data);
    yield put(actions.getSingleFoodSuccess(res));
  } catch (e) {
    yield put(actions.addLog(e));
  }
}

function* createFood(action) {
  try {
    yield call(foodApi.createFood, action.data);
    yield put(actions.createFoodSuccess);
  } catch (e) {
    yield put(actions.addLog(e));
  }
}

function* updateFood(action) {
  try {
    yield call(foodApi.updateFood, action.data);
    yield put(actions.updateFoodSuccess);
  } catch (e) {
    yield put(actions.addLog(e));
  }
}

function* deleteFood(action) {
  try {
    yield call(foodApi.deleteFood, action.data);
    yield put(actions.deleteFoodSuccess);
  } catch (e) {
    yield put(actions.addLog(e));
  }
}

export default function* foodSaga() {
  yield takeLatest(actionTypes.GET_ALL_CATEGORY, getAllFood);
  yield takeLatest(actionTypes.GET_SINGLE_CATEGORY, getSingleFood);
  yield takeLatest(actionTypes.CREATE_CATEGORY, createFood);
  yield takeLatest(actionTypes.UPDATE_CATEGORY, updateFood);
  yield takeLatest(actionTypes.DELETE_CATEGORY, deleteFood);
}
