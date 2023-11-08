import { ADD_INGREDIENT, REMOVE_INGREDIENT, MOVE_INGREDIENT } from "../actions/burger-constructor";

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
          ingredients: [...state.ingredients, action.payload],
        };
      }
    case REMOVE_INGREDIENT:
      const removedElementIndex = state.ingredients.findIndex((item) => item._id === action.payload);
      if (removedElementIndex === -1) {
        return state;
      }
      const updIngredients = [...state.ingredients];
      updIngredients.splice(removedElementIndex, 1);
      return {
        ...state,
        ingredients: updIngredients,
      };
    case MOVE_INGREDIENT:
      const { fromIndex, toIndex } = action.payload;
      const movedIngredient = state.ingredients[fromIndex];
      const updatedIngredients = [...state.ingredients];
      updatedIngredients.splice(fromIndex, 1);
      updatedIngredients.splice(toIndex, 0, movedIngredient);
      return {
        ...state,
        ingredients: updatedIngredients,
      };
    default:
      return state;
  }
};
