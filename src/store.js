import { combineReducers, createStore } from "redux";
import TestReducer from "./reducers/TestReducer";

const reducers = combineReducers({
  test: TestReducer
})

const store = createStore(reducers)

export default store;