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
  data: {
    loading: false,
    success: false,
    total: 0,
    totalToday: 0,
    orders: [
      {
        ingredients: [],
        _id: "",
        status: "",
        number: 0,
        createdAt: "",
        updatedAt: "",
        name: "",
      },
    ],
  },
};

export const ws = (state = initialState, action: TWSUnionActions) => {
  switch (action.type) {
    case WS_CONNECTION_START:
      return {
        ...state,
        connected: true,
        data: { ...state.data, loading: true },
      };

    case WS_CONNECTION_FEED_SUCCESS:
      return {
        ...state,
        connected: true,
        error: undefined,
        data: { ...state.data, loading: false },
      };

    case WS_CONNECTION_USER_SUCCESS:
      return {
        ...state,
        connected: true,
        error: undefined,
        data: { ...state.data, loading: false },
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        connected: false,
      };

    case WS_GET_FEED_DATA:
      return {
        ...state,
        data: { ...state.data, ...action.payload },
      };

    case WS_GET_USER_DATA:
      return {
        ...state,
        data: { ...state.data, ...action.payload },
      };

    case WS_CONNECTION_CLOSED:
      return initialState;

    default:
      return state;
  }
};
