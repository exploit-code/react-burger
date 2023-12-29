import { IIngredient } from "../../utils/interfaces";
import { SET_CURRENT_INGREDIENT } from "../constants/current-ingredient";

export interface ISetCurrentIngredient {
  readonly type: typeof SET_CURRENT_INGREDIENT;
  readonly payload: IIngredient;
}

export type TCurrentIngredientUnionActions = ISetCurrentIngredient;
