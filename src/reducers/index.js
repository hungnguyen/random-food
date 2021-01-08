import { combineReducers } from "redux";

import auth from "./auth";
import log from "./log";
import user from "./user";
import food from "./food";
import category from "./category";
import setting from "./setting";

const rootReducer = combineReducers({
  auth,
  log,
  user,
  food,
  category,
  setting,
});
export default rootReducer;
