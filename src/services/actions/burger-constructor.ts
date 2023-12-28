import { v4 as uuidv4 } from "uuid";
import { IIngredient, IMoveIngredient } from "../../utils/interfaces";
import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  REMOVE_ALL_INGREDIENTS,
  MOVE_INGREDIENT,
} from "../constants/burger-constructor";
import {
  IAddIngridient,
  IMoveIngridient,
  IRemoveAllIngridient,
  IRemoveIngridient,
} from "../types/burger-constructor";

export const addIngridient = (payload: IIngredient): IAddIngridient => {
  return {
    type: ADD_INGREDIENT,
    payload: {
      ...payload,
      uuid: uuidv4(),
    },
  };
};

export const removeIngridient = (payload: IIngredient): IRemoveIngridient => {
  return {
    type: REMOVE_INGREDIENT,
    payload: {
      ...payload,
    },
  };
};

export const removeAllIngridients = (): IRemoveAllIngridient => {
  return {
    type: REMOVE_ALL_INGREDIENTS,
  };
};

export const moveIngridients = (payload: IMoveIngredient): IMoveIngridient => {
  return {
    type: MOVE_INGREDIENT,
    payload: {
      ...payload,
    },
  };
};
