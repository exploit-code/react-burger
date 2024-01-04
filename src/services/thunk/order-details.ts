import { request } from "../../utils/api";
import { AppThunk } from "../types";
import { IGetOrderNumberRequest, IIngredientID, IRequestOptions } from "../../utils/interfaces";
import {
  getOrderRequest,
  getOrderSuccess,
  getOrderError,
} from "../actions/order-details";
import { removeAllIngridients } from "../actions/burger-constructor";
import { getCookie } from "../../utils/cookies";
import { refreshTokenThunk } from "./auth";

export const getOrderNumberThunk =
  (ingredientsID: IIngredientID): AppThunk =>
  (dispatch) => {
    dispatch(getOrderRequest());

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
        dispatch(getOrderSuccess(res));
        dispatch(removeAllIngridients());
      })
      .catch((err) => {
        if (err.message === "jwt expired") {
          dispatch(refreshTokenThunk(getOrderNumberThunk(ingredientsID)));
        } else {
          dispatch(getOrderError());
        }
      });
  };
