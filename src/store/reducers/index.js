import { combineReducers } from "redux";

import questions from "./questions";
import details from "./details";

export default combineReducers({
  questions,
  details
});
