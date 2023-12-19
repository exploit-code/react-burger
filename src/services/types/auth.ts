import {
  IRegisterResponse,
  IForgotPasswordResponse,
  IResetPasswordResponse,
  IGetUserResponse,
  IRefreshTokenResponse,
} from "../../utils/common-types";

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

export interface IRegisterRequestAction {
  readonly type: typeof REGISTER_REQUEST;
}

export interface IRegisterSuccessAction {
  readonly type: typeof REGISTER_SUCCESS;
  readonly payload: IRegisterResponse;
}

export interface IRegisterErrorAction {
  readonly type: typeof REGISTER_ERROR;
}

export interface ILoginRequestAction {
  readonly type: typeof LOGIN_REQUEST;
}

export interface ILoginSuccessAction {
  readonly type: typeof LOGIN_SUCCESS;
  readonly payload: IRegisterResponse;
}

export interface ILoginErrorAction {
  readonly type: typeof LOGIN_ERROR;
}

export interface IForgotPasswordRequestAction {
  readonly type: typeof FORGOT_PASSWORD_REQUEST;
}

export interface IForgotPasswordSuccessAction {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
  readonly payload: IForgotPasswordResponse;
}

export interface IForgotPasswordErrorAction {
  readonly type: typeof FORGOT_PASSWORD_ERROR;
}

export interface IResetPasswordRequestAction {
  readonly type: typeof RESET_PASSWORD_REQUEST;
}

export interface IResetPasswordSuccessAction {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
  readonly payload: IResetPasswordResponse;
}

export interface IResetPasswordErrorAction {
  readonly type: typeof RESET_PASSWORD_ERROR;
}

export interface ILogoutRequestAction {
  readonly type: typeof LOGOUT_REQUEST;
}

export interface ILogoutSuccessAction {
  readonly type: typeof LOGOUT_SUCCESS;
  readonly payload: IResetPasswordResponse;
}

export interface ILogoutErrorAction {
  readonly type: typeof LOGOUT_ERROR;
}

export interface IGetUserRequestAction {
  readonly type: typeof GET_USER_REQUEST;
}

export interface IGetUserSuccessAction {
  readonly type: typeof GET_USER_SUCCESS;
  readonly payload: IGetUserResponse;
}

export interface IGetUserErrorAction {
  readonly type: typeof GET_USER_ERROR;
}

export interface IUpdateUserRequestAction {
  readonly type: typeof UPDATE_USER_REQUEST;
}

export interface IUpdateUserSuccessAction {
  readonly type: typeof UPDATE_USER_SUCCESS;
  readonly payload: IGetUserResponse;
}

export interface IUpdateUserErrorAction {
  readonly type: typeof UPDATE_USER_ERROR;
}

export interface IRefreshTokenRequestAction {
  readonly type: typeof UPDATE_TOKEN_REQUEST;
}

export interface IRefreshTokenSuccessAction {
  readonly type: typeof UPDATE_TOKEN_SUCCESS;
  readonly payload: IRefreshTokenResponse;
}

export interface IRefreshTokenErrorAction {
  readonly type: typeof UPDATE_TOKEN_ERROR;
}

export type TAuthUnionActions =
  | IRegisterRequestAction
  | IRegisterSuccessAction
  | IRegisterErrorAction
  | ILoginRequestAction
  | ILoginSuccessAction
  | ILoginErrorAction
  | IForgotPasswordRequestAction
  | IForgotPasswordSuccessAction
  | IForgotPasswordErrorAction
  | IResetPasswordRequestAction
  | IResetPasswordSuccessAction
  | IResetPasswordErrorAction
  | ILogoutRequestAction
  | ILogoutSuccessAction
  | ILogoutErrorAction
  | IGetUserRequestAction
  | IGetUserSuccessAction
  | IGetUserErrorAction
  | IUpdateUserRequestAction
  | IUpdateUserSuccessAction
  | IUpdateUserErrorAction
  | IRefreshTokenRequestAction
  | IRefreshTokenSuccessAction
  | IRefreshTokenErrorAction;
