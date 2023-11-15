import {
  GET_REGISTER_REQUEST,
  GET_REGISTER_SUCCESS,
  GET_REGISTER_ERROR,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_ERROR,
  GET_LOGOUT_REQUEST,
  GET_LOGOUT_SUCCESS,
  GET_LOGOUT_ERROR,
} from "../actions/auth";

const initialState = {
  name: "",
  email: "",
  auth: false,
  loading: false,
  error: false,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_REGISTER_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        loading: false,
      };
    case GET_REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
