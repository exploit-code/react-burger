import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "../actions/burger-constructor";

const initialState = {
  bun: null,
  ingredients: [],
};

export const constructorIngredients = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      if (action.payload.type === "bun") {
        console.log("added bun");
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
      return {
        ...state,
        ingredients: state.ingredients.filter((el) => el.id !== action.payload),
      };
    default:
      return state;
  }
};
