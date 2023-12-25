import { AppThunk, AppDispatch } from "../types";
import { IIngredient } from "../../utils/interfaces";
import { setCurrentIngredientAction } from "../actions/ingredient-details";

export const setCurrentIngredientThunk =
  (ingredient: IIngredient): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(setCurrentIngredientAction(ingredient));
  };
