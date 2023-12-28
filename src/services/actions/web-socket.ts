import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_FEED_SUCCESS,
  WS_CONNECTION_START,
  WS_CONNECTION_USER_SUCCESS,
  WS_GET_FEED_DATA,
  WS_GET_USER_DATA,
  WS_SEND_DATA,
} from "../constants/web-socket";
import {
  IWSConnectError,
  IWSConnectFeedSuccess,
  IWSConnectPayload,
  IWSConnectStart,
  IWSConnectUserSuccess,
  IWSConnectionClosed,
  IWSGetFeedData,
  IWSGetUserData,
  IWSSendData,
} from "../types/web-socket";

export const wsConnectionStart = (payload: IWSConnectPayload): IWSConnectStart => ({
  type: WS_CONNECTION_START,
  payload,
});

export const wsConnectFeedSuccess = (payload: Event): IWSConnectFeedSuccess => ({
  type: WS_CONNECTION_FEED_SUCCESS,
  payload,
});

export const wsConnectUserSuccess = (payload: Event): IWSConnectUserSuccess => ({
  type: WS_CONNECTION_USER_SUCCESS,
  payload,
});

export const wsConnectError = (payload: Event): IWSConnectError => ({
  type: WS_CONNECTION_ERROR,
  payload,
});

export const wsGetFeedData = (payload: Event): IWSGetFeedData => ({
  type: WS_GET_FEED_DATA,
  payload,
});

export const wsGetUserData = (payload: Event): IWSGetUserData => ({
  type: WS_GET_USER_DATA,
  payload,
});

export const wsConnectionClosed = (payload: Event): IWSConnectionClosed => ({
  type: WS_CONNECTION_CLOSED,
  payload,
});

export const wsSendData = (payload: Event): IWSSendData => ({
  type: WS_SEND_DATA,
  payload,
});
