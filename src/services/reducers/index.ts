import { combineReducers } from "redux";
import { burgerIngredients } from "./burger-ingredients/burger-ingredients";
import { currentIngredient } from "./current-ingredient/current-ingredient";
import { orderDetails } from "./order-details/order-details";
import { burgerConstructor } from "./burger-constructor/burger-constructor";
import { auth } from "./auth/auth";
import { webSocket } from "./web-socket/web-socket";
import { currentOrder } from "./current-order/current-order";
import { orderInfo } from "./order-info/order-info";
import { combineOrders } from "./combine-orders/combine-orders";

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
