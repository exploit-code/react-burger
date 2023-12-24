import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { store } from "../store";
import { TAuthUnionActions } from "./auth";
import { TBurgerConstructorUnionActions } from "./burger-constructor";
import { TBurgerIngredientsUnionActions } from "./burger-ingredients";
import { TIngredientDetailsUnionActions } from "./ingredient-details";
import { TOrderDetailsUnionActions } from "./order-details";
import { TWSUnionActions } from "./ws";
import { TCurrentOrderUnionActions } from "./current-order";

export type RootState = ReturnType<typeof store.getState>;

type TApplicationActions =
  | TAuthUnionActions
  | TBurgerConstructorUnionActions
  | TBurgerIngredientsUnionActions
  | TIngredientDetailsUnionActions
  | TOrderDetailsUnionActions
  | TWSUnionActions
  | TCurrentOrderUnionActions;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TApplicationActions
>;

export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>;
