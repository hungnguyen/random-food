import * as actionTypes from "../actions/actionTypes";
const initState = {
  main: 1,
  sub: 1,
  vegetable: 1,
  soup: 1,
};

export default function setting(state = initState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_SETTING:
      return action.data;
    default:
      return state;
  }
}
