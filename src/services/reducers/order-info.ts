import {
  GET_ORDER_INFO_REQUEST,
  GET_ORDER_INFO_SUCCESS,
  GET_ORDER_INFO_ERROR,
} from "../constants/order-info";
import { TOrderInfoUnionActions } from "../types/order-info";

export interface IStateOrderInfo {
  readonly info: any;
  readonly loading: boolean;
  readonly error: boolean;
}

const initialState = {
  info: null,
  loading: false,
  error: false,
};

export const orderInfo = (
  state = initialState,
  action: TOrderInfoUnionActions
): IStateOrderInfo => {
  switch (action.type) {
    case GET_ORDER_INFO_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_ORDER_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        info: action.payload,
      };

    case GET_ORDER_INFO_ERROR:
      return {
        ...state,
        info: null,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
