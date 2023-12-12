import { v4 as uuidv4 } from "uuid";
import { IIngredient } from "../../utils/types";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const REMOVE_ALL_INGREDIENT = "REMOVE_ALL_INGREDIENT";
export const MOVE_INGREDIENT = "MOVE_INGREDIENT";

export const addIngridientAction = (payload: IIngredient) => {
  return {
    type: ADD_INGREDIENT,
    payload: {
      ...payload,
      uuid: uuidv4(),
    },
  };
};
