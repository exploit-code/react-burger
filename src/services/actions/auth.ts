import { AnyAction, Dispatch } from "redux";
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

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_ERROR";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";

export const UPDATE_TOKEN_REQUEST = "UPDATE_TOKEN_REQUEST";
export const UPDATE_TOKEN_SUCCESS = "UPDATE_TOKEN_SUCCESS";
export const UPDATE_TOKEN_ERROR = "UPDATE_TOKEN_ERROR";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";

export const register = (props: IRegisterRequest) => (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: REGISTER_REQUEST });

  const options: IRequestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(props),
  };

  request<IRegisterResponse>("auth/register", options)
    .then((res) => {
      dispatch({ type: REGISTER_SUCCESS, payload: res });
    })
    .catch(() => {
      dispatch({ type: REGISTER_ERROR });
    });
};

export const login = (props: ILoginRequest) => (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: LOGIN_REQUEST });

  const options: IRequestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(props),
  };

  return request<ILoginResponse>("auth/login", options)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res });
    })
    .catch(() => {
      dispatch({ type: LOGIN_ERROR });
    });
};

export const forgotPassword =
  (props: IForgotPasswordRequest) => (dispatch: Dispatch<AnyAction>) => {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const options: IRequestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(props),
    };

    return request<IForgotPasswordResponse>("password-reset", options)
      .then(() => {
        dispatch({ type: FORGOT_PASSWORD_SUCCESS });
      })
      .catch(() => {
        dispatch({ type: FORGOT_PASSWORD_ERROR });
      });
  };

export const resetPassword = (props: IResetPasswordRequest) => (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: RESET_PASSWORD_REQUEST });

  const options: IRequestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(props),
  };

  return request<IResetPasswordResponse>("password-reset/reset", options)
    .then(() => {
      dispatch({ type: RESET_PASSWORD_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: RESET_PASSWORD_ERROR });
    });
};

export const logout = (props: ILogoutRequest) => (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: LOGOUT_REQUEST });

  const options: IRequestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ token: props }),
  };

  request<ILogoutResponse>("auth/logout", options)
    .then((res) => {
      dispatch({ type: LOGOUT_SUCCESS, payload: res });
    })
    .catch(() => {
      dispatch({ type: LOGOUT_ERROR });
    });
};

export const getUser = (props: IGetUserRequest) => (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: GET_USER_REQUEST });

  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json;charset=utf-8", Authorization: `Bearer ${props}` },
  };

  return request<IGetUserResponse>("auth/user", options)
    .then((res) => {
      dispatch({ type: GET_USER_SUCCESS, payload: res });
    })
    .catch(() => {
      dispatch({ type: GET_USER_ERROR });
    });
};

export const updateUser = (props: IUpdateUserRequest) => (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: UPDATE_USER_REQUEST });

  const options: IRequestOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${props.accessToken}`,
    },
    body: JSON.stringify(props.user),
  };

  request<IUpdateUserResponse>("auth/user", options)
    .then((res) => {
      dispatch({ type: UPDATE_USER_SUCCESS, payload: res });
    })
    .catch(() => {
      dispatch({ type: UPDATE_USER_ERROR });
    });
};

export const updateToken = (props: IUpdateTokenRequest) => (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: UPDATE_TOKEN_REQUEST });

  const options: IRequestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ token: props }),
  };

  return request<IUpdateTokenResponse>("auth/token", options)
    .then((res) => {
      dispatch({ type: UPDATE_TOKEN_SUCCESS, payload: res });
    })
    .catch(() => {
      dispatch({ type: UPDATE_TOKEN_ERROR });
    });
};
