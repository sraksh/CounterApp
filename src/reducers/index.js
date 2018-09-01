import { combineReducers } from "redux";
import incrementor from "./reducer-incrementor";

const allReducers = combineReducers({
  incrementor: incrementor
});

export default allReducers;
