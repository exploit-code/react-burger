import type { Middleware, MiddlewareAPI } from "redux";
import { getCookie } from "../../utils/cookies";
import { TWSUnionActions } from "../types/web-socket";

export type TWsActions = {
  wsInit: string;
  wsOpen: string;
  wsMessage: string;
  wsClose: string;
  wsError: string;
};

export const socketMiddleware: (
  wsActions: TWsActions,
  wsURL: string,
  wsAuth: boolean
) => Middleware = (wsActions: TWsActions, wsURL: string, wsAuth: boolean) => {
  return (store: MiddlewareAPI) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TWSUnionActions) => {
      const { dispatch } = store;
      const { type } = action;
      const { wsInit, wsOpen, wsMessage, wsClose, wsError } = wsActions;

      if (type === wsInit && !socket) {
        if (wsAuth) socket = new WebSocket(`${wsURL}?token=${getCookie("accessToken")}`);
        else socket = new WebSocket(wsURL);

        if (socket) {
          socket.onopen = (event) => {
            dispatch({ type: wsOpen, payload: event });
          };

          socket.onerror = (event: Event) => {
            dispatch({ type: wsError, payload: event });
          };

          socket.onmessage = (event: MessageEvent<string>) => {
            const { data } = event;
            try {
              const parseData = JSON.parse(data);
              return dispatch({
                type: wsMessage,
                payload: parseData,
              });
            } catch {
              dispatch({ type: wsError, payload: event });
            }
          };

          socket.onclose = (event: CloseEvent) => {
            dispatch({ type: wsClose, payload: event });
            socket = null;
          };
        }
      }

      if (type === wsClose && socket) {
        socket.close();
        socket = null;
      }

      next(action);
    };
  };
};
