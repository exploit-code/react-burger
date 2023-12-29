import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { store } from "../store";
import { TAuthUnionActions } from "./auth";
import { TBurgerConstructorUnionActions } from "./burger-constructor";
import { TBurgerIngredientsUnionActions } from "./burger-ingredients";
import { TCurrentIngredientUnionActions } from "./current-ingredient";
import { TOrderDetailsUnionActions } from "./order-details";
import { TCurrentOrderUnionActions } from "./current-order";
import { TOrderInfoUnionActions } from "./order-info";
import { TCombineOrdersUnionActions } from "./combine-orders";
import { TWSUnionActions } from "./web-socket";

export type RootState = ReturnType<typeof store.getState>;

type TApplicationActions =
  | TAuthUnionActions
  | TBurgerConstructorUnionActions
  | TBurgerIngredientsUnionActions
  | TCurrentIngredientUnionActions
  | TOrderDetailsUnionActions
  | TCurrentOrderUnionActions
  | TOrderInfoUnionActions
  | TCombineOrdersUnionActions
  | TWSUnionActions;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TApplicationActions
>;

export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>;
