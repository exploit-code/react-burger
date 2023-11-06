import { fetchIngredients } from "../../utils/burger-api";

export const GET_INGREDIENTS_LOADING = "GET_INGREDIENTS_LOADING";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_ERROR = "GET_INGREDIENTS_ERROR";

export const getIngredients = () => (dispatch) => {
  dispatch({ type: GET_INGREDIENTS_LOADING });
  fetchIngredients()
    .then((response) => {
      dispatch({ type: GET_INGREDIENTS_SUCCESS, payload: response });
    })
    .catch(() => {
      dispatch({ type: GET_INGREDIENTS_ERROR });
    });
};
