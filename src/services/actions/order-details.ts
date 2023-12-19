import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_ERROR } from "../constants";
import { IGetOrderNumberRequest } from "../../utils/common-types";
import {
  IGetOrderRequestAction,
  IGetOrderSuccessAction,
  IGetOrderErrorAction,
} from "../types/order-details";

export const getOrderRequestAction = (): IGetOrderRequestAction => ({ type: GET_ORDER_REQUEST });

export const getOrderSuccessAction = (res: IGetOrderNumberRequest): IGetOrderSuccessAction => ({
  type: GET_ORDER_SUCCESS,
  payload: res,
});

export const getOrderErrorAction = (): IGetOrderErrorAction => ({ type: GET_ORDER_ERROR });
