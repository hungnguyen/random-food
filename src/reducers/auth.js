import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/actionTypes";

const initState = {
  isLogged: false,
  data: {},
};

export default function auth(state = initState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isLogged: true, data: action.data };
    case LOGOUT_SUCCESS:
      return { ...state, isLogged: false, data: {} };
    default:
      return state;
  }
}
