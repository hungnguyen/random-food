import * as actionTypes from "../actions/actionTypes";

const initState = {
  loading: false,
  list: [],
  item: {},
};

export default function food(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_FOOD:
      return { ...state, loading: true };
    case actionTypes.GET_ALL_FOOD_SUCCESS:
      return { ...state, loading: false, list: action.data.Food };
    case actionTypes.GET_SINGLE_FOOD:
      return { ...state, loading: true };
    case actionTypes.GET_SINGLE_FOOD_SUCCESS:
      return { ...state, loading: false, item: action.data.Food };
    case actionTypes.CREATE_FOOD:
      return { ...state, loading: true };
    case actionTypes.CREATE_FOOD_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.concat(action.data.Food),
      };
    case actionTypes.UPDATE_FOOD:
      return { ...state, loading: true };
    case actionTypes.UPDATE_FOOD_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.map((item) =>
          item._id === action.data.foodId ? action.data.body : item
        ),
      };
    case actionTypes.DELETE_FOOD:
      return { ...state, loading: true };
    case actionTypes.DELETE_FOOD_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.filter((item) => item._id !== action.data),
      };
    case actionTypes.SELECT_FOOD:
      return {
        ...state,
        item: state.list.find((item) => item._id === action.data),
      };
    default:
      return state;
  }
}
