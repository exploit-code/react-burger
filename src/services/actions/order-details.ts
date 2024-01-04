import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_ERROR } from "../constants/order-details";
import { IGetOrderNumberRequest } from "../../utils/interfaces";
import { IGetOrderRequest, IGetOrderSuccess, IGetOrderError } from "../types/order-details";

export const getOrderRequest = (): IGetOrderRequest => ({ type: GET_ORDER_REQUEST });

export const getOrderSuccess = (res: IGetOrderNumberRequest): IGetOrderSuccess => ({
  type: GET_ORDER_SUCCESS,
  payload: res,
});

export const getOrderError = (): IGetOrderError => ({ type: GET_ORDER_ERROR });
