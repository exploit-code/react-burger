import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { TAuthUnionActions } from "./auth";
import { TBurgerConstructorUnionActions } from "./burger-constructor";
import { TBurgerIngredientsUnionActions } from "./burger-ingredients";
import { TIngredientDetailsUnionActions } from "./ingredient-details";
import { TOrderDetailsUnionActions } from "./order-details";

import { store } from "../store";

export type RootState = ReturnType<typeof store.getState>;

type TApplicationActions =
  | TAuthUnionActions
  | TBurgerConstructorUnionActions
  | TBurgerIngredientsUnionActions
  | TIngredientDetailsUnionActions
  | TOrderDetailsUnionActions;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TApplicationActions
>;

export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>;
