import { combineReducers } from "redux";
import { ingredients } from "./burger-ingredients";
import { currentIngredient } from "./ingredient-details";
import { order } from "./order-details";
import { constructorIngredients } from "./burger-constructor";
import { auth } from "./auth";
import { ws } from "./ws";
import { currentOrder } from "./current-order";
import { orderInfo } from "./order-info";
import { combineOrders } from "./combine-orders";

export const rootReducer = combineReducers({
  ingredients,
  currentIngredient,
  order,
  constructorIngredients,
  auth,
  ws,
  currentOrder,
  orderInfo,
  combineOrders,
});
