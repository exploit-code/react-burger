import type { Middleware, MiddlewareAPI } from "redux";
import type { AppDispatch, AppThunk, RootState } from "../types";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_FEED_SUCCESS,
  WS_CONNECTION_USER_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_FEED_DATA,
  WS_SEND_DATA,
  WS_GET_USER_DATA,
} from "../constants/ws";
import { TWSUnionActions } from "../types/ws";

export const wsThunk = (wsURL: string): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>): AppThunk => {
    let socket: WebSocket | null = null;

    return (next) => (action: TWSUnionActions) => {
      const { dispatch } = store;
      const { type, payload } = action;

      if (type === WS_CONNECTION_START) {
        const { path, auth } = payload;
        const endpoint: string = `${wsURL}${path}`;
        const authorized: boolean = auth;

        socket = new WebSocket(endpoint);

        if (socket) {
          socket.onopen = (event: Event) => {
            dispatch({
              type: authorized ? WS_CONNECTION_USER_SUCCESS : WS_CONNECTION_FEED_SUCCESS,
              payload: event,
            });
          };

          socket.onerror = (event: Event) => {
            dispatch({ type: WS_CONNECTION_ERROR, payload: event });
          };

          socket.onmessage = (event: MessageEvent<string>) => {
            const { data } = event;
            try {
              const parseData = JSON.parse(data);
              dispatch({
                type: authorized ? WS_GET_USER_DATA : WS_GET_FEED_DATA,
                payload: parseData,
              });
            } catch {
              dispatch({ type: WS_CONNECTION_ERROR, payload: event });
            }
          };

          socket.onclose = (event: CloseEvent) => {
            dispatch({ type: WS_CONNECTION_CLOSED, payload: event });
          };
        }
      }

      if (type === WS_SEND_DATA && socket && payload) {
        socket.send(JSON.stringify(payload));
      }

      next(action);
    };
  }) as Middleware;
};
