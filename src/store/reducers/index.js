import { combineReducers } from "redux";

import books from "./bookReducer";

const allReducers = combineReducers({
  books
});

export default allReducers;
