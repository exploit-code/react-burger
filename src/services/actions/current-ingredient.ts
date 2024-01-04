import { IIngredient } from "../../utils/interfaces";
import { SET_CURRENT_INGREDIENT } from "../constants/current-ingredient";
import { ISetCurrentIngredient } from "../types/current-ingredient";

export const setCurrentIngredient = (ingredient: IIngredient): ISetCurrentIngredient => ({
  type: SET_CURRENT_INGREDIENT,
  payload: ingredient,
});
