import { AppThunk, AppDispatch } from "../types";
import { IIngredient } from "../../utils/common-types";
import { setCurrentIngredientAction } from "../actions/ingredient-details";

export const setCurrentIngredientThunk =
  (ingredient: IIngredient): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(setCurrentIngredientAction(ingredient));
  };
