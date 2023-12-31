import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_ERROR } from "../constants/order-details";
import { IGetOrderNumberRequest } from "../../utils/interfaces";

export interface IStateOrderDetails {
  readonly order: number | null;
  readonly loading: boolean;
  readonly error: boolean;
}

export interface IGetOrderRequest {
  readonly type: typeof GET_ORDER_REQUEST;
}

export interface IGetOrderSuccess {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly payload: IGetOrderNumberRequest;
}

export interface IGetOrderError {
  readonly type: typeof GET_ORDER_ERROR;
}

export type TOrderDetailsUnionActions =
  | IGetOrderRequest
  | IGetOrderSuccess
  | IGetOrderError;
