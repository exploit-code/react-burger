import { IOrder, IRequestOrder } from "../../utils/interfaces";
import {
  GET_ORDER_INFO_REQUEST,
  GET_ORDER_INFO_SUCCESS,
  GET_ORDER_INFO_ERROR,
} from "../constants/order-info";
import { TOrderInfoUnionActions } from "../types/order-info";

export interface IStateOrderInfo {
  readonly requestOrder: {};
  readonly loading: boolean;
  readonly error: boolean;
}

const initialState = {
  requestOrder: {},
  loading: false,
  error: false,
};

export const orderInfo = (state = initialState, action: TOrderInfoUnionActions): any => {
  switch (action.type) {
    case GET_ORDER_INFO_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_ORDER_INFO_SUCCESS:
      // console.log("reducer orderInfo success:", action.payload);
      return {
        ...state,
        loading: false,
        requestOrder: {
          ...state.requestOrder,
          ...action.payload.orders[0],
        },
      };

    case GET_ORDER_INFO_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
