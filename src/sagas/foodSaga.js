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
    const res = yield call(foodApi.createFood, action.data);
    yield put(actions.createFoodSuccess(res));
  } catch (e) {
    yield put(actions.addLog(e));
  }
}

function* updateFood(action) {
  try {
    yield call(foodApi.updateFood, action.data);
    yield put(actions.updateFoodSuccess(action.data));
  } catch (e) {
    yield put(actions.addLog(e));
  }
}

function* deleteFood(action) {
  try {
    yield call(foodApi.deleteFood, action.data);
    yield put(actions.deleteFoodSuccess(action.data));
  } catch (e) {
    yield put(actions.addLog(e));
  }
}

export default function* foodSaga() {
  yield takeLatest(actionTypes.GET_ALL_FOOD, getAllFood);
  yield takeLatest(actionTypes.GET_SINGLE_FOOD, getSingleFood);
  yield takeLatest(actionTypes.CREATE_FOOD, createFood);
  yield takeLatest(actionTypes.UPDATE_FOOD, updateFood);
  yield takeLatest(actionTypes.DELETE_FOOD, deleteFood);
}
