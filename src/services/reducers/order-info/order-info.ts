import {
  GET_ORDER_INFO_REQUEST,
  GET_ORDER_INFO_SUCCESS,
  GET_ORDER_INFO_ERROR,
} from "../../constants/order-info";
import { TOrderInfoUnionActions, IStateOrderInfo } from "../../types/order-info";

export const initialState: IStateOrderInfo = {
  requestOrder: {
    _id: "",
    ingredients: [],
    owner: "",
    status: "",
    name: "",
    createdAt: "",
    updatedAt: "",
    number: 0,
    __v: 0,
  },
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
