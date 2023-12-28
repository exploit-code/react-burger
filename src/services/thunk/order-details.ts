import { request } from "../../utils/api";
import { AppThunk, AppDispatch } from "../types";
import { IGetOrderNumberRequest, IIngredientID, IRequestOptions } from "../../utils/interfaces";
import {
  getOrderRequestAction,
  getOrderSuccessAction,
  getOrderErrorAction,
} from "../actions/order-details";
import { removeAllIngridientsAction } from "../actions/burger-constructor";
import { getCookie } from "../../utils/cookies";
import { refreshTokenThunk } from "./auth";

export const getOrderNumberThunk =
  (ingredientsID: IIngredientID): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(getOrderRequestAction());

    const options: IRequestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
      body: JSON.stringify(ingredientsID),
    };

    request<IGetOrderNumberRequest>("orders", options)
      .then((res) => {
        dispatch(getOrderSuccessAction(res));
        dispatch(removeAllIngridientsAction());
      })
      .catch((err) => {
        if (err.message === "jwt expired") {
          dispatch(refreshTokenThunk(getOrderNumberThunk(ingredientsID)));
        } else {
          dispatch(getOrderErrorAction());
        }
      });
  };
