import { SET_CURRENT_INGREDIENT, CLEAR_CURRENT_INGREDIENT } from "../actions/ingredient-details";

const initialState = {
  ingredient: null,
};

export const currentIngredient = (state = initialState, action) => {
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
