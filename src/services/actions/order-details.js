import { fetchOrderNumber } from "../../utils/api";
import { REMOVE_ALL_INGREDIENT } from "./burger-constructor";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_ERROR = "GET_ORDER_ERROR";

export const getOrderNumber = (ingredientsID) => (dispatch) => {
  fetchOrderNumber(ingredientsID)
    .then((res) => {
      dispatch({ type: GET_ORDER_SUCCESS, payload: res });
      dispatch({ type: REMOVE_ALL_INGREDIENT });
    })
    .catch(() => {
      dispatch({ type: GET_ORDER_ERROR });
    });
};
