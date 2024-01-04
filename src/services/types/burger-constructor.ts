import { IIngredient, IMoveIngredient, IConstructorIngredient } from "../../utils/interfaces";
import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  REMOVE_ALL_INGREDIENTS,
  MOVE_INGREDIENT,
} from "../constants/burger-constructor";

export interface IAddIngridient {
  readonly type: typeof ADD_INGREDIENT;
  readonly payload: IConstructorIngredient;
}

export interface IRemoveIngridient {
  readonly type: typeof REMOVE_INGREDIENT;
  readonly payload: IIngredient;
}

export interface IRemoveAllIngridient {
  readonly type: typeof REMOVE_ALL_INGREDIENTS;
}

export interface IMoveIngridient {
  readonly type: typeof MOVE_INGREDIENT;
  readonly payload: IMoveIngredient;
}

export type TBurgerConstructorUnionActions =
  | IAddIngridient
  | IRemoveIngridient
  | IRemoveAllIngridient
  | IMoveIngridient;
