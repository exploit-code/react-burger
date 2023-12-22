export interface IStateWS {
  connected: boolean;
  data: {
    success: boolean;
    orders: {
      ingredients: string[];
      _id: string;
      status: string;
      number: number;
      createdAt: string;
      updatedAt: string;
    }[];
    total: number;
    totalToday: number;
  };
  error?: Event;
}

import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_DATA,
} from "../constants/ws";

export interface IWSConnectStartAction {
  readonly type: typeof WS_CONNECTION_START;
}

export interface IWSConnectSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
  readonly payload: Event;
}

export interface IWSConnectErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: Event;
}

export interface IWSGetDataAction {
  readonly type: typeof WS_GET_DATA;
  readonly payload: Event;
}

export interface IWSConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
  readonly payload: Event;
}

export type TWSUnionActions =
  | IWSConnectStartAction
  | IWSConnectSuccessAction
  | IWSConnectErrorAction
  | IWSGetDataAction
  | IWSConnectionClosed;
