import { IRequestOrder } from "../../utils/interfaces";
import {
  GET_ORDER_INFO_REQUEST,
  GET_ORDER_INFO_SUCCESS,
  GET_ORDER_INFO_ERROR,
} from "../constants/order-info";
import {
  IGetOrderInfoRequest,
  IGetOrderInfoSuccess,
  IGetOrderInfoError,
} from "../types/order-info";

export const getOrderInfoRequest = (): IGetOrderInfoRequest => ({
  type: GET_ORDER_INFO_REQUEST,
});

export const getOrderInfoSuccess = (res: IRequestOrder): IGetOrderInfoSuccess => ({
  type: GET_ORDER_INFO_SUCCESS,
  payload: res,
});

export const getOrderInfoError = (): IGetOrderInfoError => ({
  type: GET_ORDER_INFO_ERROR,
});
