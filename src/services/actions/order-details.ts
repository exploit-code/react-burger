import { request } from "../../utils/api";
import { removeAllIngridientsAction } from "./burger-constructor";
import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_ERROR } from "../constants";
import { IGetOrderNumberRequest } from "../../utils/types";

interface IGetOrderRequestAction {
  readonly type: typeof GET_ORDER_REQUEST;
}

interface IGetOrderSuccessAction {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly payload: IGetOrderNumberRequest;
}

interface IGetOrderErrorAction {
  readonly type: typeof GET_ORDER_ERROR;
}

const getOrderRequestAction = (): IGetOrderRequestAction => ({ type: GET_ORDER_REQUEST });

const getOrderSuccessAction = (res: IGetOrderNumberRequest): IGetOrderSuccessAction => ({
  type: GET_ORDER_SUCCESS,
  payload: res,
});

const getOrderErrorAction = (): IGetOrderErrorAction => ({ type: GET_ORDER_ERROR });

export const getOrderNumberThunk = (ingredientsID: string[]) => (dispatch: any) => {
  dispatch(getOrderRequestAction());
  request<IGetOrderNumberRequest>("orders", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(ingredientsID),
  }).then((res) => {
    if (res && res.success) {
      dispatch(getOrderSuccessAction(res));
      dispatch(removeAllIngridientsAction());
    } else {
      dispatch(getOrderErrorAction());
    }
  });
};
