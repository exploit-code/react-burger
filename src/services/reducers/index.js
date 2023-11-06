import { combineReducers } from "redux";
import { ingredients } from "./burger-ingredients";

export const rootReducer = combineReducers({
  ingredients,
});
