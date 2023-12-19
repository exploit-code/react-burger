import { v4 as uuidv4 } from "uuid";
import { IIngredient, IMoveIngredient } from "../../utils/common-types";
import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  REMOVE_ALL_INGREDIENTS,
  MOVE_INGREDIENT,
} from "../constants";
import {
  IAddIngridientAction,
  IMoveIngridientAction,
  IRemoveAllIngridientAction,
  IRemoveIngridientAction,
} from "../types/burger-constructor";

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

export const moveIngridientsAction = (payload: IMoveIngredient): IMoveIngridientAction => {
  return {
    type: MOVE_INGREDIENT,
    payload: {
      ...payload,
    },
  };
};
