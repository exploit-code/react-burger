import { SET_CURRENT_INGREDIENT } from "../constants/current-ingredient";
import { TIngredientDetailsUnionActions } from "../types/current-ingredient";
import { IIngredient } from "../../utils/interfaces";

interface IStateCurrentIngredient {
  readonly ingredient: null | IIngredient;
}

const initialState: IStateCurrentIngredient = {
  ingredient: null,
};

export const currentIngredient = (state = initialState, action: TIngredientDetailsUnionActions) => {
  switch (action.type) {
    case SET_CURRENT_INGREDIENT:
      return {
        ...state,
        ingredient: action.payload,
      };

    default:
      return state;
  }
};
