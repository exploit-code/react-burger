import { GET_INGREDIENTS_LOADING, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_ERROR } from "../actions/burger-ingredients";

const initialState = {
  ingredients: [],
  loading: false,
  error: false,
};

export const burgerIngredients = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_LOADING:
      return {
        ...state,
        pending: true,
      };
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        pending: false,
        ingredients: action.data,
      };
    case GET_INGREDIENTS_ERROR:
      return {
        ...state,
        pending: false,
        reject: true,
      };
    default:
      return state;
  }
};
