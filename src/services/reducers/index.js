import { combineReducers } from "redux";
import { ingredients } from "./burger-ingredients";
import { currentIngredient } from "./ingredient-details";
import { order } from "./order-details";
import { constructorIngredients } from "./burger-constructor";

export const rootReducer = combineReducers({
  ingredients,
  currentIngredient,
  order,
  constructorIngredients,
});
