import { request } from "../../utils/api";
import { IGetIngredientsResponce } from "../../utils/types";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "../constants";
import { AppThunk, AppDispatch } from "../types";

export interface IGetIngredientsRequestAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly payload: IGetIngredientsResponce;
}

export interface IGetIngredientsErrorAction {
  readonly type: typeof GET_INGREDIENTS_ERROR;
}

export type TBurgerIngredientsUnionActions =
  | IGetIngredientsRequestAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsErrorAction;

export const getIngredientsRequestAction = (): IGetIngredientsRequestAction => ({
  type: GET_INGREDIENTS_REQUEST,
});

export const getIngredientsSuccessAction = (
  res: IGetIngredientsResponce
): IGetIngredientsSuccessAction => ({
  type: GET_INGREDIENTS_SUCCESS,
  payload: res,
});

export const getIngredientsErrorAction = (): IGetIngredientsErrorAction => ({
  type: GET_INGREDIENTS_ERROR,
});

export const getIngredientsThunk = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(getIngredientsRequestAction());
  request<IGetIngredientsResponce>("ingredients").then((res) => {
    if (res && res.success) {
      dispatch(getIngredientsSuccessAction(res));
    } else {
      dispatch(getIngredientsErrorAction());
    }
  });
};
