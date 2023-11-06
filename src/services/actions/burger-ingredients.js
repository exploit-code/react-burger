import { fetchIngredients } from "../../utils/api";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_ERROR = "GET_INGREDIENTS_ERROR";

export const getIngredients = () => (dispatch) => {
  dispatch({ type: GET_INGREDIENTS_REQUEST });
  fetchIngredients()
    .then((response) => {
      dispatch({ type: GET_INGREDIENTS_SUCCESS, payload: response });
    })
    .catch(() => {
      dispatch({ type: GET_INGREDIENTS_ERROR });
    });
};
