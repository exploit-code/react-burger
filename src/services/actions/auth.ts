import { request } from "../../utils/api";
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
  IUpdateTokenRequest,
  IUpdateTokenResponse,
} from "../../utils/types";

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

interface IRegisterRequestAction {
  readonly type: typeof REGISTER_REQUEST;
}

interface IRegisterSuccessAction {
  readonly type: typeof REGISTER_SUCCESS;
  readonly payload: IRegisterResponse;
}

interface IRegisterErrorAction {
  readonly type: typeof REGISTER_ERROR;
}

const registerRequestAction = (): IRegisterRequestAction => ({ type: REGISTER_REQUEST });

const registerSuccessAction = (res: IRegisterResponse): IRegisterSuccessAction => ({
  type: REGISTER_SUCCESS,
  payload: res,
});

const registerErrorAction = (): IRegisterErrorAction => ({ type: REGISTER_ERROR });

interface ILoginRequestAction {
  readonly type: typeof LOGIN_REQUEST;
}

interface ILoginSuccessAction {
  readonly type: typeof LOGIN_SUCCESS;
  readonly payload: IRegisterResponse;
}

interface ILoginErrorAction {
  readonly type: typeof LOGIN_ERROR;
}

const loginRequestAction = (): ILoginRequestAction => ({ type: LOGIN_REQUEST });

const loginSuccessAction = (res: ILoginResponse): ILoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: res,
});

const loginErrorAction = (): ILoginErrorAction => ({ type: LOGIN_ERROR });

interface IForgotPasswordRequestAction {
  readonly type: typeof FORGOT_PASSWORD_REQUEST;
}

interface IForgotPasswordSuccessAction {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
  readonly payload: IForgotPasswordResponse;
}

interface IForgotPasswordErrorAction {
  readonly type: typeof FORGOT_PASSWORD_ERROR;
}

const forgotPasswordRequestAction = (): IForgotPasswordRequestAction => ({
  type: FORGOT_PASSWORD_REQUEST,
});

const forgotPasswordSuccessAction = (
  res: IForgotPasswordResponse
): IForgotPasswordSuccessAction => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: res,
});

const forgotPasswordErrorAction = (): IForgotPasswordErrorAction => ({
  type: FORGOT_PASSWORD_ERROR,
});

interface IResetPasswordRequestAction {
  readonly type: typeof RESET_PASSWORD_REQUEST;
}

interface IResetPasswordSuccessAction {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
  readonly payload: IResetPasswordResponse;
}

interface IResetPasswordErrorAction {
  readonly type: typeof RESET_PASSWORD_ERROR;
}

const resetPasswordRequestAction = (): IResetPasswordRequestAction => ({
  type: RESET_PASSWORD_REQUEST,
});

const resetPasswordSuccessAction = (res: IResetPasswordResponse): IResetPasswordSuccessAction => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: res,
});

const resetPasswordErrorAction = (): IResetPasswordErrorAction => ({
  type: RESET_PASSWORD_ERROR,
});

interface ILogoutRequestAction {
  readonly type: typeof LOGOUT_REQUEST;
}

interface ILogoutSuccessAction {
  readonly type: typeof LOGOUT_SUCCESS;
  readonly payload: IResetPasswordResponse;
}

interface ILogoutErrorAction {
  readonly type: typeof LOGOUT_ERROR;
}

const logoutRequestAction = (): ILogoutRequestAction => ({
  type: LOGOUT_REQUEST,
});

const logoutSuccessAction = (res: ILogoutResponse): ILogoutSuccessAction => ({
  type: LOGOUT_SUCCESS,
  payload: res,
});

const logoutErrorAction = (): ILogoutErrorAction => ({
  type: LOGOUT_ERROR,
});

interface IGetUserRequestAction {
  readonly type: typeof GET_USER_REQUEST;
}

interface IGetUserSuccessAction {
  readonly type: typeof GET_USER_SUCCESS;
  readonly payload: IGetUserResponse;
}

interface IGetUserErrorAction {
  readonly type: typeof GET_USER_ERROR;
}

const getUserRequestAction = (): IGetUserRequestAction => ({
  type: GET_USER_REQUEST,
});

const getUserSuccessAction = (res: IGetUserResponse): IGetUserSuccessAction => ({
  type: GET_USER_SUCCESS,
  payload: res,
});

const getUserErrorAction = (): IGetUserErrorAction => ({
  type: GET_USER_ERROR,
});

interface IUpdateUserRequestAction {
  readonly type: typeof UPDATE_USER_REQUEST;
}

interface IUpdateUserSuccessAction {
  readonly type: typeof UPDATE_USER_SUCCESS;
  readonly payload: IGetUserResponse;
}

interface IUpdateUserErrorAction {
  readonly type: typeof UPDATE_USER_ERROR;
}

const updateUserRequestAction = (): IUpdateUserRequestAction => ({
  type: UPDATE_USER_REQUEST,
});

const updateUserSuccessAction = (res: IUpdateUserResponse): IUpdateUserSuccessAction => ({
  type: UPDATE_USER_SUCCESS,
  payload: res,
});

const updateUserErrorAction = (): IUpdateUserErrorAction => ({
  type: UPDATE_USER_ERROR,
});

interface IUpdateTokenRequestAction {
  readonly type: typeof UPDATE_TOKEN_REQUEST;
}

interface IUpdateTokenSuccessAction {
  readonly type: typeof UPDATE_TOKEN_SUCCESS;
  readonly payload: IUpdateTokenResponse;
}

interface IUpdateTokenErrorAction {
  readonly type: typeof UPDATE_TOKEN_ERROR;
}

const updateTokenRequestAction = (): IUpdateTokenRequestAction => ({
  type: UPDATE_TOKEN_REQUEST,
});

const updateTokenSuccessAction = (res: IUpdateTokenResponse): IUpdateTokenSuccessAction => ({
  type: UPDATE_TOKEN_SUCCESS,
  payload: res,
});

const updateTokenErrorAction = (): IUpdateTokenErrorAction => ({
  type: UPDATE_TOKEN_ERROR,
});

export const registerThunk = (props: IRegisterRequest) => (dispatch: any) => {
  dispatch(registerRequestAction());

  const options: IRequestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(props),
  };

  request<IRegisterResponse>("auth/register", options).then((res) => {
    if (res && res.success) {
      dispatch(registerSuccessAction(res));
    } else {
      dispatch(registerErrorAction());
    }
  });
};

export const loginThunk = (props: ILoginRequest) => (dispatch: any) => {
  dispatch(loginRequestAction());

  const options: IRequestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(props),
  };

  return request<ILoginResponse>("auth/login", options).then((res) => {
    if (res && res.success) {
      dispatch(loginSuccessAction(res));
    } else {
      dispatch(loginErrorAction());
    }
  });
};

export const forgotPasswordThunk = (props: IForgotPasswordRequest) => (dispatch: any) => {
  dispatch(forgotPasswordRequestAction());

  const options: IRequestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(props),
  };

  return request<IForgotPasswordResponse>("password-reset", options).then((res) => {
    if (res && res.success) {
      dispatch(forgotPasswordSuccessAction(res));
    } else {
      dispatch(forgotPasswordErrorAction);
    }
  });
};

export const resetPasswordThunk = (props: IResetPasswordRequest) => (dispatch: any) => {
  dispatch(resetPasswordRequestAction());

  const options: IRequestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(props),
  };

  return request<IResetPasswordResponse>("password-reset/reset", options).then((res) => {
    if (res && res.message) {
      dispatch(resetPasswordSuccessAction(res));
    } else {
      dispatch(resetPasswordErrorAction());
    }
  });
};

export const logoutThunk = (props: ILogoutRequest) => (dispatch: any) => {
  dispatch(logoutRequestAction());

  const options: IRequestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ token: props }),
  };

  request<ILogoutResponse>("auth/logout", options).then((res) => {
    if (res && res.success) {
      dispatch(logoutSuccessAction(res));
    } else {
      dispatch(logoutErrorAction);
    }
  });
};

export const getUserThunk = (props: IGetUserRequest) => (dispatch: any) => {
  dispatch(getUserRequestAction());

  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json;charset=utf-8", Authorization: `Bearer ${props}` },
  };

  return request<IGetUserResponse>("auth/user", options).then((res) => {
    if (res && res.success) {
      dispatch(getUserSuccessAction(res));
    } else {
      dispatch(getUserErrorAction);
    }
  });
};

export const updateUserThunk = (props: IUpdateUserRequest) => (dispatch: any) => {
  dispatch(updateUserRequestAction());

  const options: IRequestOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${props.accessToken}`,
    },
    body: JSON.stringify(props.user),
  };

  request<IUpdateUserResponse>("auth/user", options).then((res) => {
    if (res && res.success) {
      dispatch(updateUserSuccessAction(res));
    } else {
      dispatch(updateUserErrorAction());
    }
  });
};

export const updateTokenThunk = (props: IUpdateTokenRequest) => (dispatch: any) => {
  dispatch(updateTokenRequestAction());

  const options: IRequestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ token: props }),
  };

  return request<IUpdateTokenResponse>("auth/token", options).then((res) => {
    if (res && res.success) {
      dispatch(updateTokenSuccessAction(res));
    } else {
      dispatch(updateTokenErrorAction());
    }
  });
};

export type TAuthUnionAction =
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
  | IUpdateTokenRequestAction
  | IUpdateTokenSuccessAction
  | IUpdateTokenErrorAction;
