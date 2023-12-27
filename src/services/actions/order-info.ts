import {
  GET_ORDER_INFO_REQUEST,
  GET_ORDER_INFO_SUCCESS,
  GET_ORDER_INFO_ERROR,
} from "../constants/order-info";
import {
  IGetOrderInfoRequestAction,
  IGetOrderInfoSuccessAction,
  IGetOrderInfoErrorAction,
} from "../types/order-info";

export const getOrderInfoRequestAction = (): IGetOrderInfoRequestAction => ({
  type: GET_ORDER_INFO_REQUEST,
});

export const getOrderInfoSuccessAction = (res: any): IGetOrderInfoSuccessAction => ({
  type: GET_ORDER_INFO_SUCCESS,
  payload: res,
});

export const getOrderInfoErrorAction = (): IGetOrderInfoErrorAction => ({
  type: GET_ORDER_INFO_ERROR,
});
