import { SET_CURRENT_INGREDIENT } from "../constants";
import { TIngredientDetailsUnionAction } from "../actions/ingredient-details";
import { IIngredient } from "../../utils/types";

interface IStateCurrentIngredient {
  readonly ingredient: null | IIngredient;
}

const initialState: IStateCurrentIngredient = {
  ingredient: null,
};

export const currentIngredient = (state = initialState, action: TIngredientDetailsUnionAction) => {
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
