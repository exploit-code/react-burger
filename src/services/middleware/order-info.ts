import { request } from "../../utils/api";
import { AppThunk, AppDispatch } from "../types";
import { IGetOrderNumberRequest, IRequestOptions } from "../../utils/interfaces";
import {
  getOrderInfoRequestAction,
  getOrderInfoSuccessAction,
  getOrderInfoErrorAction,
} from "../actions/order-info";

export const getOrderInfoThunk =
  (orderNumber: any): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(getOrderInfoRequestAction());

    request<IGetOrderNumberRequest>(`orders/${orderNumber}`)
      .then((res) => {
        dispatch(getOrderInfoSuccessAction(res));
      })
      .catch(() => {
        dispatch(getOrderInfoErrorAction());
      });
  };
