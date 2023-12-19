import { IIngredient, IMoveIngredient, IConstructorIngredient } from "../../utils/common-types";
import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  REMOVE_ALL_INGREDIENTS,
  MOVE_INGREDIENT,
} from "../constants/burger-constructor";

export interface IAddIngridientAction {
  readonly type: typeof ADD_INGREDIENT;
  readonly payload: IConstructorIngredient;
}

export interface IRemoveIngridientAction {
  readonly type: typeof REMOVE_INGREDIENT;
  readonly payload: IIngredient;
}

export interface IRemoveAllIngridientAction {
  readonly type: typeof REMOVE_ALL_INGREDIENTS;
}

export interface IMoveIngridientAction {
  readonly type: typeof MOVE_INGREDIENT;
  readonly payload: IMoveIngredient;
}

export type TBurgerConstructorUnionActions =
  | IAddIngridientAction
  | IRemoveIngridientAction
  | IRemoveAllIngridientAction
  | IMoveIngridientAction;
