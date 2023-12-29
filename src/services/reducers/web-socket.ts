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
import { IWSState, TWSUnionActions } from "../types/web-socket";

const initialState: IWSState = {
  connected: false,
  loading: false,
  feedOrders: {
    orders: [],
    success: false,
    total: 0,
    totalToday: 0,
  },
  userOrders: {
    orders: [],
    success: false,
    total: 0,
    totalToday: 0,
  },
};

export const webSocket = (state = initialState, action: TWSUnionActions): IWSState => {
  switch (action.type) {
    case WS_CONNECTION_FEED_START:
      return {
        ...state,
        connected: true,
        loading: true,
      };

    case WS_CONNECTION_USER_START:
      return {
        ...state,
        connected: true,
        loading: true,
      };

    case WS_CONNECTION_FEED_SUCCESS:
      return {
        ...state,
        connected: true,
        loading: false,
      };

    case WS_CONNECTION_USER_SUCCESS:
      return {
        ...state,
        connected: true,
        loading: false,
      };

    case WS_CONNECTION_FEED_ERROR:
      return {
        ...state,
        loading: false,
        connected: false,
        error: action.payload,
      };

    case WS_CONNECTION_USER_ERROR:
      return {
        ...state,
        loading: false,
        connected: false,
        error: action.payload,
      };

    case WS_GET_FEED_DATA:
      return {
        ...state,
        feedOrders: { ...state.feedOrders, ...action.payload },
      };

    case WS_GET_USER_DATA:
      return {
        ...state,
        userOrders: { ...state.userOrders, ...action.payload },
      };

    case WS_CONNECTION_FEED_CLOSED:
      return {
        ...state,
        connected: false,
        loading: false,
      };

    case WS_CONNECTION_USER_CLOSED:
      return {
        ...state,
        connected: false,
        loading: false,
      };

    default:
      return state;
  }
};
