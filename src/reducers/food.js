import * as actionTypes from "../actions/actionTypes";

const initState = {
  loading: false,
  list: {},
  item: {},
};

export default function food(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_FOOD:
      return { ...state, loading: true };
    case actionTypes.GET_ALL_FOOD_SUCCESS:
      return { ...state, loading: false, list: action.data };
    case actionTypes.GET_SINGLE_FOOD:
      return { ...state, loading: true };
    case actionTypes.GET_SINGLE_FOOD_SUCCESS:
      return { ...state, loading: false, item: action.data };
    case actionTypes.CREATE_FOOD:
      return { ...state, loading: true };
    case actionTypes.CREATE_FOOD_SUCCESS:
      return { ...state, loading: false };
    case actionTypes.UPDATE_FOOD:
      return { ...state, loading: true };
    case actionTypes.UPDATE_FOOD_SUCCESS:
      return { ...state, loading: false };
    case actionTypes.DELETE_FOOD:
      return { ...state, loading: true };
    case actionTypes.DELETE_FOOD_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
}
