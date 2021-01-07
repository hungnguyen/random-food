import * as actionTypes from "../actions/actionTypes";

const initState = {
  loading: false,
  list: {},
  item: {},
};

export default function user(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_USER:
      return { ...state, loading: true };
    case actionTypes.GET_ALL_USER_SUCCESS:
      return { ...state, loading: false, data: action.data };
    case actionTypes.GET_SINGLE_USER:
      return { ...state, loading: true };
    case actionTypes.GET_SINGLE_USER_SUCCESS:
      return { ...state, loading: false, item: action.data };
    case actionTypes.CREATE_USER:
      return { ...state, loading: true };
    case actionTypes.CREATE_USER_SUCCESS:
      return { ...state, loading: false };
    case actionTypes.UPDATE_USER:
      return { ...state, loading: true };
    case actionTypes.UPDATE_USER_SUCCESS:
      return { ...state, loading: false };
    case actionTypes.DELETE_USER:
      return { ...state, loading: true };
    case actionTypes.DELETE_USER_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
}
