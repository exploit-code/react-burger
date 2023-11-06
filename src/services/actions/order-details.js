import { fetchOrderNumber } from "../../utils/api";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_ERROR = "GET_ORDER_ERROR";

export const getOrderNumber = (ingredientsID) => (dispatch) => {
  dispatch({ type: GET_ORDER_REQUEST });
  fetchOrderNumber(ingredientsID)
    .then((response) => {
      dispatch({ type: GET_ORDER_SUCCESS, payload: response });
    })
    .catch(() => {
      dispatch({ type: GET_ORDER_ERROR });
    });
};
