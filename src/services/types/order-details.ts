import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_ERROR } from "../constants/order-details";
import { IGetOrderNumberRequest } from "../../utils/interfaces";

export interface IGetOrderRequestAction {
  readonly type: typeof GET_ORDER_REQUEST;
}

export interface IGetOrderSuccessAction {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly payload: IGetOrderNumberRequest;
}

export interface IGetOrderErrorAction {
  readonly type: typeof GET_ORDER_ERROR;
}

export type TOrderDetailsUnionActions =
  | IGetOrderRequestAction
  | IGetOrderSuccessAction
  | IGetOrderErrorAction;
