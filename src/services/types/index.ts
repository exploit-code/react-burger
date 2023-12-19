import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { TAuthUnionActions } from "../actions/auth";
import { TBurgerConstructorUnionActions } from "../actions/burger-constructor";
import { TBurgerIngredientsUnionActions } from "../actions/burger-ingredients";
import { TIngredientDetailsUnionActions } from "../actions/ingredient-details";
import { TOrderDetailsUnionActions } from "../actions/order-details";

import { store } from "../configureStore";

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
