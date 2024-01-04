import { AppThunk } from "../types";
import { IIngredient } from "../../utils/interfaces";
import { setCurrentIngredient } from "../actions/current-ingredient";

export const setCurrentIngredientThunk =
  (ingredient: IIngredient): AppThunk =>
  (dispatch) => {
    dispatch(setCurrentIngredient(ingredient));
  };
