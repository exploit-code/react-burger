import {
  WS_CONNECTION_FEED_START,
  WS_CONNECTION_USER_START,
  WS_CONNECTION_FEED_SUCCESS,
  WS_CONNECTION_USER_SUCCESS,
  WS_CONNECTION_FEED_ERROR,
  WS_CONNECTION_USER_ERROR,
  WS_CONNECTION_FEED_CLOSED,
  WS_CONNECTION_USER_CLOSED,
  WS_GET_FEED_DATA,
  WS_GET_USER_DATA,
} from "../constants/web-socket";
import { IOrder } from "../../utils/interfaces";

export interface IWSState {
  connected: boolean;
  loading: boolean;
  error?: Event;
  feedOrders: {
    success: boolean;
    orders: IOrder[];
    total: number;
    totalToday: number;
  };
  userOrders: {
    success: boolean;
    orders: IOrder[];
    total: number;
    totalToday: number;
  };
}

export interface IWSConnectFeedStart {
  readonly type: typeof WS_CONNECTION_FEED_START;
}
export interface IWSConnectUserStart {
  readonly type: typeof WS_CONNECTION_USER_START;
}

export interface IWSConnectFeedSuccess {
  readonly type: typeof WS_CONNECTION_FEED_SUCCESS;
}
export interface IWSConnectUserSuccess {
  readonly type: typeof WS_CONNECTION_USER_SUCCESS;
}

export interface IWSConnectFeedError {
  readonly type: typeof WS_CONNECTION_FEED_ERROR;
  readonly payload: Event;
}
export interface IWSConnectUserError {
  readonly type: typeof WS_CONNECTION_USER_ERROR;
  readonly payload: Event;
}

export interface IWSGetFeedData {
  readonly type: typeof WS_GET_FEED_DATA;
  payload: IOrder[];
}

export interface IWSGetUserData {
  readonly type: typeof WS_GET_USER_DATA;
  payload: IOrder[];
}

export interface IWSConnectionFeedClosed {
  readonly type: typeof WS_CONNECTION_FEED_CLOSED;
}

export interface IWSConnectionUserClosed {
  readonly type: typeof WS_CONNECTION_USER_CLOSED;
}

export type TWSUnionActions =
  | IWSConnectFeedStart
  | IWSConnectUserStart
  | IWSConnectFeedSuccess
  | IWSConnectUserSuccess
  | IWSConnectFeedError
  | IWSConnectUserError
  | IWSGetFeedData
  | IWSGetUserData
  | IWSConnectionFeedClosed
  | IWSConnectionUserClosed;
