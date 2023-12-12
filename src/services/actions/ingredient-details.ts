import { AnyAction, Dispatch } from "redux";
import { IIngredient } from "../../utils/types";

export const SET_CURRENT_INGREDIENT = "SET_CURRENT_INGREDIENT";
export const CLEAR_CURRENT_INGREDIENT = "CLEAR_CURRENT_INGREDIENT";

export const setCurrentIngredient =
  (ingredient: IIngredient) => (dispatch: Dispatch<AnyAction>) => {
    dispatch({ type: SET_CURRENT_INGREDIENT, payload: ingredient });
  };

export const clearCurrentIngredient = () => (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: CLEAR_CURRENT_INGREDIENT });
};
