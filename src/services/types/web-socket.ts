import { IOrder } from "../../utils/interfaces";

export interface IStateWS {
  connected: boolean;
  loading: boolean;
  feedOrders: {
    orders: IOrder[];
    success: boolean;
    total: number;
    totalToday: number;
  };
  userOrders: {
    orders: IOrder[];
    success: boolean;
    total: number;
    totalToday: number;
  };
  error?: Event;
}

import {
  WS_CONNECTION_START,
  WS_CONNECTION_FEED_SUCCESS,
  WS_CONNECTION_USER_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_FEED_DATA,
  WS_SEND_DATA,
  WS_GET_USER_DATA,
} from "../constants/web-socket";

export interface IWSConnectPayload {
  readonly path: string;
  readonly auth: boolean;
}

export interface IWSConnectStartAction {
  readonly type: typeof WS_CONNECTION_START;
  readonly payload: IWSConnectPayload;
}

export interface IWSConnectFeedSuccessAction {
  readonly type: typeof WS_CONNECTION_FEED_SUCCESS;
  readonly payload: Event;
}

export interface IWSConnectUserSuccessAction {
  readonly type: typeof WS_CONNECTION_USER_SUCCESS;
  readonly payload: Event;
}

export interface IWSConnectErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: Event;
}

export interface IWSGetFeedDataAction {
  readonly type: typeof WS_GET_FEED_DATA;
  readonly payload: Event;
}

export interface IWSGetUserDataAction {
  readonly type: typeof WS_GET_USER_DATA;
  readonly payload: Event;
}

export interface IWSConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
  readonly payload?: Event;
}

export interface IWSSendDataAction {
  readonly type: typeof WS_SEND_DATA;
  readonly payload: Event;
}

export type TWSUnionActions =
  | IWSConnectStartAction
  | IWSConnectFeedSuccessAction
  | IWSConnectUserSuccessAction
  | IWSConnectErrorAction
  | IWSGetFeedDataAction
  | IWSGetUserDataAction
  | IWSConnectionClosedAction
  | IWSSendDataAction;
