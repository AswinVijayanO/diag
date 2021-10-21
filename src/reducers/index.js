import searchReduce from "./searchReduce";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  search: searchReduce,
});

export default allReducers;
