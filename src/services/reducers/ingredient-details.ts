import { SET_CURRENT_INGREDIENT } from "../constants";
import { TIngredientDetailsUnionActions } from "../types/ingredient-details";
import { IIngredient } from "../../utils/common-types";

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
