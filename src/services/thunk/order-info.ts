import { request } from "../../utils/api";
import { AppThunk } from "../types";
import { IRequestOrder } from "../../utils/interfaces";
import {
  getOrderInfoRequest,
  getOrderInfoSuccess,
  getOrderInfoError,
} from "../actions/order-info";

export const getOrderInfoThunk =
  (orderNumber: string): AppThunk =>
  (dispatch) => {
    dispatch(getOrderInfoRequest());

    request<IRequestOrder>(`orders/${orderNumber}`)
      .then((res) => {
        dispatch(getOrderInfoSuccess(res));
      })
      .catch(() => {
        dispatch(getOrderInfoError());
      });
  };
