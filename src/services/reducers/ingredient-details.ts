import { SET_CURRENT_INGREDIENT, CLEAR_CURRENT_INGREDIENT } from "../constants";
import { IIngredientDetailsUnionAction } from "../actions/ingredient-details";
import { IIngredient } from "../../utils/types";

interface IStateCurrentIngredient {
  readonly ingredient: null | IIngredient;
}

const initialState: IStateCurrentIngredient = {
  ingredient: null,
};

export const currentIngredient = (state = initialState, action: IIngredientDetailsUnionAction) => {
  switch (action.type) {
    case SET_CURRENT_INGREDIENT:
      return {
        ...state,
        ingredient: action.payload,
      };

    case CLEAR_CURRENT_INGREDIENT:
      return {
        ...state,
        ingredient: null,
      };

    default:
      return state;
  }
};
