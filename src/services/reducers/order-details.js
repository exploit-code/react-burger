import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_ERROR } from "../actions/order-details";

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
        order: action.payload,
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
