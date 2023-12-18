import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";

import { TAuthUnionAction } from "../actions/auth";
import { TBurgerConstructorUnionAction } from "../actions/burger-constructor";
import { TBurgerIngredientsUnionAction } from "../actions/burger-ingredients";
import { TIngredientDetailsUnionAction } from "../actions/ingredient-details";
import { TOrderDetailsUnionAction } from "../actions/order-details";

import { store } from "../configureStore";

export type RootState = ReturnType<typeof store.getState>;

type TApplicationActions =
  | TAuthUnionAction
  | TBurgerConstructorUnionAction
  | TBurgerIngredientsUnionAction
  | TIngredientDetailsUnionAction
  | TOrderDetailsUnionAction;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export type AppDispatch = typeof store.dispatch;
