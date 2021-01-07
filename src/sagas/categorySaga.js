import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as categoryApi from "../api/categoryApi";
import * as actionTypes from "../actions/actionTypes";

function* getAllCategory() {
  try {
    const res = yield call(categoryApi.getAllCategory);
    yield put(actions.getAllCategorySuccess(res));
  } catch (e) {
    yield put(actions.addLog(e));
  }
}

function* getSingleCategory(action) {
  try {
    const res = yield call(categoryApi.getSingleCategory, action.data);
    yield put(actions.getSingleCategorySuccess(res));
  } catch (e) {
    yield put(actions.addLog(e));
  }
}

function* createCategory(action) {
  try {
    yield call(categoryApi.createCategory, action.data);
    yield put(actions.createCategorySuccess);
  } catch (e) {
    yield put(actions.addLog(e));
  }
}

function* updateCategory(action) {
  try {
    yield call(categoryApi.updateCategory, action.data);
    yield put(actions.updateCategorySuccess);
  } catch (e) {
    yield put(actions.addLog(e));
  }
}

function* deleteCategory(action) {
  try {
    yield call(categoryApi.deleteCategory, action.data);
    yield put(actions.deleteCategorySuccess);
  } catch (e) {
    yield put(actions.addLog(e));
  }
}

export default function* categorySaga() {
  yield takeLatest(actionTypes.GET_ALL_CATEGORY, getAllCategory);
  yield takeLatest(actionTypes.GET_SINGLE_CATEGORY, getSingleCategory);
  yield takeLatest(actionTypes.CREATE_CATEGORY, createCategory);
  yield takeLatest(actionTypes.UPDATE_CATEGORY, updateCategory);
  yield takeLatest(actionTypes.DELETE_CATEGORY, deleteCategory);
}
