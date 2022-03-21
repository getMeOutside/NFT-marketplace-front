import { combineReducers, createStore } from "redux";
import CardsReducer from "../reducers/CardsReducer";

const rootReducer = combineReducers({
  cardsReducer: CardsReducer,
})

export const store = createStore(rootReducer);
