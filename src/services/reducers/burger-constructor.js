import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "../actions/burger-constructor";

const initialState = {
  bun: null,
  ingredients: [],
};

export const constructorIngredients = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      if (action.payload.type === "bun") {
        return {
          ...state,
          bun: action.payload,
        };
      } else {
        return {
          ...state,
          ingredients: state.ingredients.concat(action.payload),
        };
      }
    case REMOVE_INGREDIENT:
      const removedEl = state.ingredients.findIndex((item) => item._id === action.payload);
      if (removedEl === -1) return state.ingredients;
      const updatedIngredients = [...state.ingredients];
      updatedIngredients.splice(removedEl, 1);
      return {
        ...state,
        ingredients: updatedIngredients,
      };
    default:
      return state;
  }
};
