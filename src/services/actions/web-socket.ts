import { IOrder } from "../../utils/interfaces";
import {
  WS_CONNECTION_FEED_START,
  WS_CONNECTION_USER_START,
  WS_CONNECTION_FEED_SUCCESS,
  WS_CONNECTION_USER_SUCCESS,
  WS_GET_FEED_DATA,
  WS_GET_USER_DATA,
  WS_CONNECTION_FEED_ERROR,
  WS_CONNECTION_USER_ERROR,
  WS_CONNECTION_FEED_CLOSED,
  WS_CONNECTION_USER_CLOSED,
} from "../constants/web-socket";
import {
  IWSConnectFeedStart,
  IWSConnectUserStart,
  IWSConnectFeedSuccess,
  IWSConnectUserSuccess,
  IWSGetFeedData,
  IWSGetUserData,
  IWSConnectFeedError,
  IWSConnectUserError,
  IWSConnectionFeedClosed,
  IWSConnectionUserClosed,
} from "../types/web-socket";

export const wsConnectionFeedStart = (): IWSConnectFeedStart => ({
  type: WS_CONNECTION_FEED_START,
});

export const wsConnectionUserStart = (): IWSConnectUserStart => ({
  type: WS_CONNECTION_USER_START,
});

export const wsConnectFeedSuccess = (): IWSConnectFeedSuccess => ({
  type: WS_CONNECTION_FEED_SUCCESS,
});

export const wsConnectUserSuccess = (): IWSConnectUserSuccess => ({
  type: WS_CONNECTION_USER_SUCCESS,
});

export const wsConnectFeedError = (payload: Event): IWSConnectFeedError => ({
  type: WS_CONNECTION_FEED_ERROR,
  payload,
});

export const wsConnectUserError = (payload: Event): IWSConnectUserError => ({
  type: WS_CONNECTION_USER_ERROR,
  payload,
});

export const wsGetFeedData = (payload: IOrder[]): IWSGetFeedData => ({
  type: WS_GET_FEED_DATA,
  payload,
});

export const wsGetUserData = (payload: IOrder[]): IWSGetUserData => ({
  type: WS_GET_USER_DATA,
  payload,
});

export const wsConnectionFeedClosed = (): IWSConnectionFeedClosed => ({
  type: WS_CONNECTION_FEED_CLOSED,
});

export const wsConnectionUserClosed = (): IWSConnectionUserClosed => ({
  type: WS_CONNECTION_USER_CLOSED,
});
