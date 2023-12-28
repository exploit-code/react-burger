import { request } from "../../utils/api";
import { AppThunk } from "../types";
import { IRequestOrder } from "../../utils/interfaces";
import {
  getOrderInfoRequestAction,
  getOrderInfoSuccessAction,
  getOrderInfoErrorAction,
} from "../actions/order-info";

export const getOrderInfoThunk =
  (orderNumber: string): AppThunk =>
  (dispatch) => {
    dispatch(getOrderInfoRequestAction());

    request<IRequestOrder>(`orders/${orderNumber}`)
      .then((res) => {
        dispatch(getOrderInfoSuccessAction(res));
      })
      .catch(() => {
        dispatch(getOrderInfoErrorAction());
      });
  };
