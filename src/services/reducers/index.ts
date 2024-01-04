import { combineReducers } from "redux";
import { burgerIngredients } from "./burger-ingredients";
import { currentIngredient } from "./current-ingredient";
import { orderDetails } from "./order-details";
import { burgerConstructor } from "./burger-constructor";
import { auth } from "./auth";
import { webSocket } from "./web-socket";
import { currentOrder } from "./current-order";
import { orderInfo } from "./order-info";
import { combineOrders } from "./combine-orders";

export const rootReducer = combineReducers({
  burgerIngredients,
  burgerConstructor,
  currentIngredient,
  orderDetails,
  currentOrder,
  orderInfo,
  auth,
  webSocket,
  combineOrders,
});
