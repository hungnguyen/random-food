import * as actionTypes from "../actions/actionTypes";

const initState = {
  loading: false,
  list: {},
  item: {},
};

export default function category(state = initState, action) {
  console.log(action);
  switch (action.type) {
    case actionTypes.GET_ALL_CATEGORY:
      return { ...state, loading: true };
    case actionTypes.GET_ALL_CATEGORY_SUCCESS:
      return { ...state, loading: false, list: action.data };
    case actionTypes.GET_SINGLE_CATEGORY:
      return { ...state, loading: true };
    case actionTypes.GET_SINGLE_CATEGORY_SUCCESS:
      return { ...state, loading: false, item: action.data };
    case actionTypes.CREATE_CATEGORY:
      return { ...state, loading: true };
    case actionTypes.CREATE_CATEGORY_SUCCESS:
      return { ...state, loading: false };
    case actionTypes.UPDATE_CATEGORY:
      return { ...state, loading: true };
    case actionTypes.UPDATE_CATEGORY_SUCCESS:
      return { ...state, loading: false };
    case actionTypes.DELETE_CATEGORY:
      return { ...state, loading: true };
    case actionTypes.DELETE_CATEGORY_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
}
