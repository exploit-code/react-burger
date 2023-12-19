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
  UPDATE_TOKEN_REQUEST,
  UPDATE_TOKEN_SUCCESS,
  UPDATE_TOKEN_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from "../constants";
import { TAuthUnionActions } from "../types/auth";
import { IUser } from "../../utils/common-types";

interface IAuthState {
  readonly user: IUser;
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly loading: boolean;
  readonly error: boolean;
  readonly reset: boolean;
}

const initialState: IAuthState = {
  user: {
    name: "",
    email: "",
  },
  accessToken: "",
  refreshToken: "",
  loading: false,
  error: false,
  reset: false,
};

export const auth = (state = initialState, action: TAuthUnionActions) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        accessToken: action.payload.accessToken.split("Bearer ")[1],
        refreshToken: action.payload.refreshToken,
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
        user: action.payload.user,
        accessToken: action.payload.accessToken.split("Bearer ")[1],
        refreshToken: action.payload.refreshToken,
        loading: false,
        reset: false,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
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
        reset: true,
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
        reset: false,
      };

    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case UPDATE_TOKEN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        accessToken: action.payload.accessToken.split("Bearer ")[1],
        refreshToken: action.payload.refreshToken,
        error: false,
      };

    case UPDATE_TOKEN_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
      };

    case GET_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case UPDATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
      };

    case UPDATE_USER_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    default:
      return state;
  }
};
