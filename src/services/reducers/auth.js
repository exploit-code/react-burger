import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_ERROR,
} from "../actions/auth";

const initialState = {
  name: "",
  email: "",
  accessToken: null,
  loading: false,
  error: false,
  forgot: false,
  reset: false,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        name: action.payload.user.name,
        email: action.payload.user.email,
        loading: false,
        accessToken: action.payload.accessToken.split("Bearer ")[1],
      };
    case REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...initialState,
      };
    case LOGOUT_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        name: action.payload.user.name,
        email: action.payload.user.email,
        accessToken: action.payload.accessToken.split("Bearer ")[1],
        loading: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        forgot: true,
      };
    case FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        reset: true,
      };
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case REFRESH_TOKEN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        accessToken: action.payload.accessToken.split('Bearer ')[1],
        reset: true,
      };
    case REFRESH_TOKEN_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    default:
      return state;
  }
};
