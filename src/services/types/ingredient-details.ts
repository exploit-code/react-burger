import { IIngredient } from "../../utils/interfaces";
import { SET_CURRENT_INGREDIENT } from "../constants/ingredient-details";

export interface ISetCurrentIngredientAction {
  readonly type: typeof SET_CURRENT_INGREDIENT;
  readonly payload: IIngredient;
}

export type TIngredientDetailsUnionActions = ISetCurrentIngredientAction;
