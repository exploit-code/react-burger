import {
  WS_CONNECTION_START,
  WS_CONNECTION_FEED_SUCCESS,
  WS_CONNECTION_USER_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_FEED_DATA,
  WS_GET_USER_DATA,
} from "../constants/ws";
import { TWSUnionActions, IStateWS } from "../types/ws";

const initialState: IStateWS = {
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

export const ws = (state = initialState, action: TWSUnionActions): IStateWS => {
  switch (action.type) {
    case WS_CONNECTION_START:
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
        error: undefined,
        feedOrders: { ...state.feedOrders },
      };

    case WS_CONNECTION_USER_SUCCESS:
      return {
        ...state,
        connected: true,
        loading: false,
        error: undefined,
        userOrders: { ...state.userOrders },
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        connected: false,
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

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
      };

    default:
      return state;
  }
};
