import { IIngredient } from "../../utils/common-types";
import { SET_CURRENT_INGREDIENT } from "../constants";
import { ISetCurrentIngredientAction } from "../types/ingredient-details";

export const setCurrentIngredientAction = (
  ingredient: IIngredient
): ISetCurrentIngredientAction => ({
  type: SET_CURRENT_INGREDIENT,
  payload: ingredient,
});
