import { request } from "../../utils/api";
import { AppThunk, AppDispatch } from "../types";
import { IGetOrderNumberRequest, IIngredientID, IRequestOptions } from "../../utils/common-types";
import {
  getOrderRequestAction,
  getOrderSuccessAction,
  getOrderErrorAction,
} from "../actions/order-details";
import { removeAllIngridientsAction } from "../actions/burger-constructor";

export const getOrderNumberThunk =
  (ingredientsID: IIngredientID): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(getOrderRequestAction());

    const options: IRequestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(ingredientsID),
    };

    request<IGetOrderNumberRequest>("orders", options)
      .then((res) => {
        dispatch(getOrderSuccessAction(res));
        dispatch(removeAllIngridientsAction());
      })
      .catch(() => {
        dispatch(getOrderErrorAction());
      });
  };
