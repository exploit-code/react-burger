import { request } from "../../utils/api";

export const GET_REGISTER_REQUEST = "GET_REGISTER_REQUEST";
export const GET_REGISTER_SUCCESS = "GET_REGISTER_SUCCESS";
export const GET_REGISTER_ERROR = "GET_REGISTER_ERROR";

export const GET_LOGIN_REQUEST = "GET_LOGIN_REQUEST";
export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_ERROR = "GET_LOGIN_ERROR";

export const GET_LOGOUT_REQUEST = "GET_LOGOUT_REQUEST";
export const GET_LOGOUT_SUCCESS = "GET_LOGOUT_SUCCESS";
export const GET_LOGOUT_ERROR = "GET_LOGOUT_ERROR";

export const userRegister = (user) => (dispatch) => {
  dispatch({ type: GET_REGISTER_REQUEST });
  request("auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(user),
  })
    .then((res) => {
      dispatch({ type: GET_REGISTER_SUCCESS, payload: res.user });
    })
    .catch(() => {
      dispatch({ type: GET_REGISTER_ERROR });
    });
};
