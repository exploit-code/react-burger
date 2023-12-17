import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_ERROR } from "../constants";

const initialState = {
  order: null,
  loading: false,
  error: false,
};

export const order = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload.order.number,
      };

    case GET_ORDER_ERROR:
      return {
        ...state,
        order: null,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
