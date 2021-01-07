import * as actionTypes from "../actions/actionTypes";

const initState = {
  list: {},
};

export default function log(state = initState, action) {
  switch (action.type) {
    case actionTypes.ADD_LOG:
      return { ...state, list: state.list.concat(action.data) };
    default:
      return state;
  }
}
