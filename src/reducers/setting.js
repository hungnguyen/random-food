import * as actionTypes from "../actions/actionTypes";
const initState = {};

export default function setting(state = initState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_SETTING:
      return action.data;
    default:
      return state;
  }
}
