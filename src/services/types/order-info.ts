import {
  GET_ORDER_INFO_REQUEST,
  GET_ORDER_INFO_SUCCESS,
  GET_ORDER_INFO_ERROR,
} from "../constants/order-info";
import { IOrder, IRequestOrder } from "../../utils/interfaces";

export interface IStateOrderInfo {
  readonly requestOrder: IOrder;
  readonly loading: boolean;
  readonly error: boolean;
}

export interface IGetOrderInfoRequestAction {
  readonly type: typeof GET_ORDER_INFO_REQUEST;
}

export interface IGetOrderInfoSuccessAction {
  readonly type: typeof GET_ORDER_INFO_SUCCESS;
  readonly payload: IRequestOrder;
}

export interface IGetOrderInfoErrorAction {
  readonly type: typeof GET_ORDER_INFO_ERROR;
}

export type TOrderInfoUnionActions =
  | IGetOrderInfoRequestAction
  | IGetOrderInfoSuccessAction
  | IGetOrderInfoErrorAction;
