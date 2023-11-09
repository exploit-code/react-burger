import { request } from "../../utils/api";
import { REMOVE_ALL_INGREDIENT } from "./burger-constructor";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_ERROR = "GET_ORDER_ERROR";

export const getOrderNumber = (ingredientsID) => (dispatch) => {
  dispatch({ type: GET_ORDER_REQUEST });
  request("orders", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(ingredientsID),
  })
    .then((res) => {
      dispatch({ type: GET_ORDER_SUCCESS, payload: res.order.number });
      dispatch({ type: REMOVE_ALL_INGREDIENT });
    })
    .catch(() => {
      dispatch({ type: GET_ORDER_ERROR });
    });
};
