// import { IStateWS } from "../types/ws";
// import {
//   WS_CONNECTION_START,
//   WS_CONNECTION_SUCCESS,
//   WS_CONNECTION_ERROR,
//   WS_CONNECTION_CLOSED,
//   WS_GET_FEED_DATA,
//   WS_GET_USER_DATA,
// } from "../constants/ws";
// import { TWSUnionActions } from "../types/ws";

// const initialState = {
//   connected: false,
//   data: {
//     feed: {
//       success: false,
//       total: 0,
//       totalToday: 0,
//       orders: [
//         {
//           ingredients: [],
//           _id: "",
//           status: "",
//           number: 0,
//           createdAt: "",
//           updatedAt: "",
//           name: "",
//         },
//       ],
//     },
//     history: {
//       success: false,
//       total: 0,
//       totalToday: 0,
//       orders: [
//         {
//           ingredients: [],
//           _id: "",
//           status: "",
//           number: 0,
//           createdAt: "",
//           updatedAt: "",
//           name: "",
//         },
//       ],
//     },
//   },
// };

// export const ws = (state = initialState, action: TWSUnionActions) => {
//   switch (action.type) {
//     case WS_CONNECTION_START:
//       return {
//         ...state,
//         connected: true,
//       };

//     case WS_CONNECTION_SUCCESS:
//       return {
//         ...state,
//         error: undefined,
//         connected: true,
//       };

//     case WS_CONNECTION_ERROR:
//       return {
//         ...state,
//         error: action.payload,
//         connected: false,
//       };

//     case WS_CONNECTION_CLOSED:
//       return {
//         ...state,
//         error: undefined,
//         connected: false,
//       };

//     case WS_GET_FEED_DATA:
//       return {
//         ...state,
//         error: undefined,
//         data: {
//           ...state.data,
//           feed: { ...state.data.feed, ...action.payload },
//         },
//       };

//     case WS_GET_USER_DATA:
//       return {
//         ...state,
//         error: undefined,
//         data: {
//           ...state.data,
//           history: { ...state.data.history, ...action.payload },
//         },
//       };

//     default:
//       return state;
//   }
// };

import {
  WS_CONNECTION_START,
  WS_CONNECTION_FEED_SUCCESS,
  WS_CONNECTION_USER_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_FEED_DATA,
  WS_GET_USER_DATA,
} from "../constants/ws";
import { TWSUnionActions } from "../types/ws";

interface IOrder {
  ingredients: string[];
  _id: string;
  status: string;
  number: number;
  createdAt: string;
  updatedAt: string;
  name: string;
}

interface IData {
  success: boolean;
  total: number;
  totalToday: number;
  orders: IOrder[];
  error?: Event;
}

interface IInitialState {
  connected: boolean;
  feed: IData;
  history: IData;
}

const wsRequestMap: IData = {
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
};

const initialState: IInitialState = {
  connected: false,
  feed: wsRequestMap,
  history: wsRequestMap,
};

export const ws = (state: IInitialState = initialState, action: TWSUnionActions): IInitialState => {
  switch (action.type) {
    case WS_CONNECTION_START:
      return {
        ...state,
        connected: true,
        feed: { ...state.feed },
        history: { ...state.history },
      };

    case WS_CONNECTION_FEED_SUCCESS:
      return {
        ...state,
        connected: true,
        feed: { ...state.feed, error: undefined },
      };

    case WS_CONNECTION_USER_SUCCESS:
      return {
        ...state,
        connected: true,
        history: { ...state.history, error: undefined },
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        connected: false,
        feed: { ...state.feed, error: action.payload },
        history: { ...state.history, error: action.payload },
      };

    case WS_CONNECTION_CLOSED:
      return initialState;

    case WS_GET_FEED_DATA:
      return {
        ...state,
        feed: { ...state.feed, ...action.payload },
      };

    case WS_GET_USER_DATA:
      return {
        ...state,
        history: { ...state.history, ...action.payload },
      };

    default:
      return state;
  }
};
