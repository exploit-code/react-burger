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
} from "../constants/auth";
import {
  IForgotPasswordErrorAction,
  IForgotPasswordRequestAction,
  IForgotPasswordSuccessAction,
  IGetUserErrorAction,
  IGetUserRequestAction,
  IGetUserSuccessAction,
  ILoginErrorAction,
  ILoginRequestAction,
  ILoginSuccessAction,
  ILogoutErrorAction,
  ILogoutRequestAction,
  ILogoutSuccessAction,
  IRefreshTokenErrorAction,
  IRefreshTokenRequestAction,
  IRefreshTokenSuccessAction,
  IRegisterErrorAction,
  IRegisterRequestAction,
  IRegisterSuccessAction,
  IResetPasswordErrorAction,
  IResetPasswordRequestAction,
  IResetPasswordSuccessAction,
  IUpdateUserErrorAction,
  IUpdateUserRequestAction,
  IUpdateUserSuccessAction,
} from "../types/auth";
import {
  IForgotPasswordResponse,
  IGetUserResponse,
  ILoginResponse,
  ILogoutResponse,
  IRegisterResponse,
  IResetPasswordResponse,
  IUpdateUserResponse,
} from "../../utils/interfaces";

export const registerRequestAction = (): IRegisterRequestAction => ({ type: REGISTER_REQUEST });

export const registerSuccessAction = (res: IRegisterResponse): IRegisterSuccessAction => ({
  type: REGISTER_SUCCESS,
  payload: res,
});

export const registerErrorAction = (): IRegisterErrorAction => ({ type: REGISTER_ERROR });

export const loginRequestAction = (): ILoginRequestAction => ({ type: LOGIN_REQUEST });

export const loginSuccessAction = (res: ILoginResponse): ILoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: res,
});

export const loginErrorAction = (): ILoginErrorAction => ({ type: LOGIN_ERROR });

export const forgotPasswordRequestAction = (): IForgotPasswordRequestAction => ({
  type: FORGOT_PASSWORD_REQUEST,
});

export const forgotPasswordSuccessAction = (
  res: IForgotPasswordResponse
): IForgotPasswordSuccessAction => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: res,
});

export const forgotPasswordErrorAction = (): IForgotPasswordErrorAction => ({
  type: FORGOT_PASSWORD_ERROR,
});

export const resetPasswordRequestAction = (): IResetPasswordRequestAction => ({
  type: RESET_PASSWORD_REQUEST,
});

export const resetPasswordSuccessAction = (
  res: IResetPasswordResponse
): IResetPasswordSuccessAction => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: res,
});

export const resetPasswordErrorAction = (): IResetPasswordErrorAction => ({
  type: RESET_PASSWORD_ERROR,
});

export const logoutRequestAction = (): ILogoutRequestAction => ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccessAction = (res: ILogoutResponse): ILogoutSuccessAction => ({
  type: LOGOUT_SUCCESS,
  payload: res,
});

export const logoutErrorAction = (): ILogoutErrorAction => ({
  type: LOGOUT_ERROR,
});

export const getUserRequestAction = (): IGetUserRequestAction => ({
  type: GET_USER_REQUEST,
});

export const getUserSuccessAction = (res: IGetUserResponse): IGetUserSuccessAction => ({
  type: GET_USER_SUCCESS,
  payload: res,
});

export const getUserErrorAction = (): IGetUserErrorAction => ({
  type: GET_USER_ERROR,
});

export const updateUserRequestAction = (): IUpdateUserRequestAction => ({
  type: UPDATE_USER_REQUEST,
});

export const updateUserSuccessAction = (res: IUpdateUserResponse): IUpdateUserSuccessAction => ({
  type: UPDATE_USER_SUCCESS,
  payload: res,
});

export const updateUserErrorAction = (): IUpdateUserErrorAction => ({
  type: UPDATE_USER_ERROR,
});

export const refreshTokenRequestAction = (): IRefreshTokenRequestAction => ({
  type: UPDATE_TOKEN_REQUEST,
});

export const refreshTokenSuccessAction = (): IRefreshTokenSuccessAction => ({
  type: UPDATE_TOKEN_SUCCESS,
});

export const refreshTokenErrorAction = (): IRefreshTokenErrorAction => ({
  type: UPDATE_TOKEN_ERROR,
});
