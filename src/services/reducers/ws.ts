import { IStateWS } from "../types/ws";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_DATA,
} from "../constants/ws";

const initialState: IStateWS = {
  connected: false,
  data: {
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
      },
    ],
  },
};

export const ws = (state = initialState, action: any) => {
  switch (action.type) {
    case WS_CONNECTION_START:
      return {
        ...state,
        connected: true,
      };

    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        connected: true,
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        connected: false,
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        connected: false,
      };

    case WS_GET_DATA:
      return {
        ...state,
        error: undefined,
        data: { ...state.data, ...action.payload },
      };

    default:
      return state;
  }
};
