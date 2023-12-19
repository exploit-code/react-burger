import { request } from "../../utils/api";
import { AppThunk, AppDispatch } from "../types";
import {
  IRequestOptions,
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IRegisterResponse,
  IForgotPasswordRequest,
  IForgotPasswordResponse,
  IResetPasswordRequest,
  IResetPasswordResponse,
  ILogoutRequest,
  ILogoutResponse,
  IGetUserRequest,
  IGetUserResponse,
  IUpdateUserRequest,
  IUpdateUserResponse,
  IRefreshTokenRequest,
  IRefreshTokenResponse,
} from "../../utils/common-types";
import {
  forgotPasswordErrorAction,
  forgotPasswordRequestAction,
  forgotPasswordSuccessAction,
  getUserErrorAction,
  getUserRequestAction,
  getUserSuccessAction,
  loginErrorAction,
  loginRequestAction,
  loginSuccessAction,
  logoutErrorAction,
  logoutRequestAction,
  logoutSuccessAction,
  refreshTokenErrorAction,
  refreshTokenRequestAction,
  refreshTokenSuccessAction,
  registerErrorAction,
  registerRequestAction,
  registerSuccessAction,
  resetPasswordErrorAction,
  resetPasswordRequestAction,
  resetPasswordSuccessAction,
  updateUserErrorAction,
  updateUserRequestAction,
  updateUserSuccessAction,
} from "../actions/auth";

export const registerThunk =
  ({ email, name, password }: IRegisterRequest): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(registerRequestAction());

    const options: IRequestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({ email, name, password }),
    };

    request<IRegisterResponse>("auth/register", options)
      .then((res) => {
        dispatch(registerSuccessAction(res));
      })
      .catch(() => {
        dispatch(registerErrorAction());
      });
  };

export const loginThunk =
  ({ email, password }: ILoginRequest): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(loginRequestAction());

    const options: IRequestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ email, password }),
    };

    return request<ILoginResponse>("auth/login", options)
      .then((res) => {
        dispatch(loginSuccessAction(res));
      })
      .catch(() => {
        dispatch(loginErrorAction());
      });
  };

export const forgotPasswordThunk =
  ({ email }: IForgotPasswordRequest): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(forgotPasswordRequestAction());

    const options: IRequestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({ email }),
    };

    return request<IForgotPasswordResponse>("password-reset", options)
      .then((res) => {
        dispatch(forgotPasswordSuccessAction(res));
      })
      .catch(() => {
        dispatch(forgotPasswordErrorAction());
      });
  };

export const resetPasswordThunk =
  ({ password, token }: IResetPasswordRequest): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(resetPasswordRequestAction());

    const options: IRequestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({ password, token }),
    };

    return request<IResetPasswordResponse>("password-reset/reset", options)
      .then((res) => {
        dispatch(resetPasswordSuccessAction(res));
      })
      .catch(() => {
        dispatch(resetPasswordErrorAction());
      });
  };

export const logoutThunk =
  ({ token }: ILogoutRequest): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(logoutRequestAction());

    const options: IRequestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({ token: token }),
    };

    request<ILogoutResponse>("auth/logout", options)
      .then((res) => {
        dispatch(logoutSuccessAction(res));
      })
      .catch(() => {
        dispatch(logoutErrorAction());
      });
  };

export const getUserThunk =
  ({ token }: IGetUserRequest): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(getUserRequestAction());

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    };

    return request<IGetUserResponse>("auth/user", options)
      .then((res) => {
        dispatch(getUserSuccessAction(res));
      })
      .catch(() => {
        dispatch(getUserErrorAction());
      });
  };

export const updateUserThunk =
  ({ user, accessToken }: IUpdateUserRequest): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(updateUserRequestAction());

    const options: IRequestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(user),
    };

    request<IUpdateUserResponse>("auth/user", options)
      .then((res) => {
        dispatch(updateUserSuccessAction(res));
      })
      .catch(() => {
        dispatch(updateUserErrorAction());
      });
  };

export const refreshTokenThunk =
  ({ token }: IRefreshTokenRequest): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(refreshTokenRequestAction());
    const options: IRequestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({ token: token }),
    };

    return request<IRefreshTokenResponse>("auth/token", options)
      .then((res) => {
        if (res && res.success) dispatch(refreshTokenSuccessAction(res));
      })
      .catch(() => {
        dispatch(refreshTokenErrorAction());
      });
  };