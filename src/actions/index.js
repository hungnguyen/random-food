import * as actionTypes from "./actionTypes";

//auth
export const loginSuccess = (data) => ({
  type: actionTypes.LOGIN_SUCCESS,
  data,
});

export const logoutSuccess = () => ({ type: actionTypes.LOGOUT_SUCCESS });

//user
export const getAllUser = (data) => ({ type: actionTypes.GET_ALL_USER, data });

export const getAllUserSuccess = (data) => ({
  type: actionTypes.GET_ALL_USER_SUCCESS,
  data,
});

export const getSingleUser = (data) => ({
  type: actionTypes.GET_SINGLE_USER,
  data,
});

export const getSingleUserSuccess = (data) => ({
  type: actionTypes.GET_SINGLE_USER_SUCCESS,
  data,
});

export const createUser = (data) => ({
  type: actionTypes.CREATE_USER,
  data,
});

export const createUserSuccess = (data) => ({
  type: actionTypes.CREATE_USER_SUCCESS,
  data,
});

export const updateUser = (data) => ({
  type: actionTypes.UPDATE_USER,
  data,
});

export const updateUserSuccess = (data) => ({
  type: actionTypes.UPDATE_USER_SUCCESS,
  data,
});

export const deleteUser = (data) => ({
  type: actionTypes.DELETE_USER,
  data,
});

export const deleteUserSuccess = (data) => ({
  type: actionTypes.DELETE_USER_SUCCESS,
  data,
});

//food
export const getAllFood = (data) => ({ type: actionTypes.GET_ALL_FOOD, data });

export const getAllFoodSuccess = (data) => ({
  type: actionTypes.GET_ALL_FOOD_SUCCESS,
  data,
});

export const getSingleFood = (data) => ({
  type: actionTypes.GET_SINGLE_FOOD,
  data,
});

export const getSingleFoodSuccess = (data) => ({
  type: actionTypes.GET_SINGLE_FOOD_SUCCESS,
  data,
});

export const createFood = (data) => ({
  type: actionTypes.CREATE_FOOD,
  data,
});

export const createFoodSuccess = (data) => ({
  type: actionTypes.CREATE_FOOD_SUCCESS,
  data,
});

export const updateFood = (data) => ({
  type: actionTypes.UPDATE_FOOD,
  data,
});

export const updateFoodSuccess = (data) => ({
  type: actionTypes.UPDATE_FOOD_SUCCESS,
  data,
});

export const deleteFood = (data) => ({
  type: actionTypes.DELETE_FOOD,
  data,
});

export const deleteFoodSuccess = (data) => ({
  type: actionTypes.DELETE_FOOD_SUCCESS,
  data,
});

//category
export const getAllCategory = (data) => ({
  type: actionTypes.GET_ALL_CATEGORY,
  data,
});

export const getAllCategorySuccess = (data) => ({
  type: actionTypes.GET_ALL_CATEGORY_SUCCESS,
  data,
});

export const getSingleCategory = (data) => ({
  type: actionTypes.GET_SINGLE_CATEGORY,
  data,
});

export const getSingleCategorySuccess = (data) => ({
  type: actionTypes.GET_SINGLE_CATEGORY_SUCCESS,
  data,
});

export const createCategory = (data) => ({
  type: actionTypes.CREATE_CATEGORY,
  data,
});

export const createCategorySuccess = (data) => ({
  type: actionTypes.CREATE_CATEGORY_SUCCESS,
  data,
});

export const updateCategory = (data) => ({
  type: actionTypes.UPDATE_CATEGORY,
  data,
});

export const updateCategorySuccess = (data) => ({
  type: actionTypes.UPDATE_CATEGORY_SUCCESS,
  data,
});

export const deleteCategory = (data) => ({
  type: actionTypes.DELETE_CATEGORY,
  data,
});

export const deleteCategorySuccess = (data) => ({
  type: actionTypes.DELETE_CATEGORY_SUCCESS,
  data,
});

//log
export const addLog = (data) => ({
  type: actionTypes.ADD_LOG,
  data,
});

//setting
export const updateSetting = (data) => ({
  type: actionTypes.UPDATE_SETTING,
  data,
});
