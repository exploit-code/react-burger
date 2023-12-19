import { request } from "../../utils/api";
import { removeAllIngridientsAction } from "./burger-constructor";
import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_ERROR } from "../constants";
import { IGetOrderNumberRequest, IIngredientID, IRequestOptions } from "../../utils/common-types";
import { AppThunk, AppDispatch } from "../types";

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

export type TOrderDetailsUnionActions =
  | IGetOrderRequestAction
  | IGetOrderSuccessAction
  | IGetOrderErrorAction;

const getOrderRequestAction = (): IGetOrderRequestAction => ({ type: GET_ORDER_REQUEST });

const getOrderSuccessAction = (res: IGetOrderNumberRequest): IGetOrderSuccessAction => ({
  type: GET_ORDER_SUCCESS,
  payload: res,
});

const getOrderErrorAction = (): IGetOrderErrorAction => ({ type: GET_ORDER_ERROR });

export const getOrderNumberThunk =
  (ingredientsID: IIngredientID): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(getOrderRequestAction());

    const options: IRequestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(ingredientsID),
    };

    request<IGetOrderNumberRequest>("orders", options)
      .then((res) => {
        dispatch(getOrderSuccessAction(res));
        dispatch(removeAllIngridientsAction());
      })
      .catch(() => {
        dispatch(getOrderErrorAction());
      });
  };
