import { IOrder } from "../../utils/interfaces";

export interface IStateWS {
  connected: boolean;
  loading: boolean;
  error?: Event;
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

export interface IWSConnectStart {
  readonly type: typeof WS_CONNECTION_START;
  readonly payload: IWSConnectPayload;
}

export interface IWSConnectFeedSuccess {
  readonly type: typeof WS_CONNECTION_FEED_SUCCESS;
  readonly payload: Event;
}

export interface IWSConnectUserSuccess {
  readonly type: typeof WS_CONNECTION_USER_SUCCESS;
  readonly payload: Event;
}

export interface IWSConnectError {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: Event;
}

export interface IWSGetFeedData {
  readonly type: typeof WS_GET_FEED_DATA;
  readonly payload: Event;
}

export interface IWSGetUserData {
  readonly type: typeof WS_GET_USER_DATA;
  readonly payload: Event;
}

export interface IWSConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
  readonly payload?: Event;
}

export interface IWSSendData {
  readonly type: typeof WS_SEND_DATA;
  readonly payload: Event;
}

export type TWSUnionActions =
  | IWSConnectStart
  | IWSConnectFeedSuccess
  | IWSConnectUserSuccess
  | IWSConnectError
  | IWSGetFeedData
  | IWSGetUserData
  | IWSConnectionClosed
  | IWSSendData;
