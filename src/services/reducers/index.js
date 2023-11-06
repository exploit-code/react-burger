import { combineReducers } from "redux";
import { ingredients } from "./burger-ingredients";
import { currentIngredient } from "./ingredient-details";

export const rootReducer = combineReducers({
  ingredients,
  currentIngredient,
});
