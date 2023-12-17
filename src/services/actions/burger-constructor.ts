import { v4 as uuidv4 } from "uuid";
import { IIngredient, IMoveIngredient, IConstructorIngredient } from "../../utils/types";
import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  REMOVE_ALL_INGREDIENTS,
  MOVE_INGREDIENT,
} from "../constants";

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

export const addIngridientAction = (payload: IIngredient): IAddIngridientAction => {
  return {
    type: ADD_INGREDIENT,
    payload: {
      ...payload,
      uuid: uuidv4(),
    },
  };
};

export const removeIngridientAction = (payload: IIngredient): IRemoveIngridientAction => {
  return {
    type: REMOVE_INGREDIENT,
    payload: {
      ...payload,
    },
  };
};

export const removeAllIngridientsAction = (): IRemoveAllIngridientAction => {
  return {
    type: REMOVE_ALL_INGREDIENTS,
  };
};

export const moveAllIngridientsAction = (payload: IMoveIngredient): IMoveIngridientAction => {
  return {
    type: MOVE_INGREDIENT,
    payload: {
      ...payload,
    },
  };
};
