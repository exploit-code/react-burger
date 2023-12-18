import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { TAuthUnionAction } from "./actions/auth";
import { TBurgerConstructorUnionAction } from "./actions/burger-constructor";
import { TBurgerIngredientsUnionAction } from "./actions/burger-ingredients";
import { TIngredientDetailsUnionAction } from "./actions/ingredient-details";
import { TOrderDetailsUnionAction } from "./actions/order-details";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

type TApplicationActions =
  | TAuthUnionAction
  | TBurgerConstructorUnionAction
  | TBurgerIngredientsUnionAction
  | TIngredientDetailsUnionAction
  | TOrderDetailsUnionAction;

export type TAppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export type TAppDispatch = typeof store.dispatch;
