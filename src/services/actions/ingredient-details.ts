import { IIngredient } from "../../utils/interfaces";
import { SET_CURRENT_INGREDIENT } from "../constants/ingredient-details";
import { ISetCurrentIngredientAction } from "../types/ingredient-details";

export const setCurrentIngredientAction = (
  ingredient: IIngredient
): ISetCurrentIngredientAction => ({
  type: SET_CURRENT_INGREDIENT,
  payload: ingredient,
});
