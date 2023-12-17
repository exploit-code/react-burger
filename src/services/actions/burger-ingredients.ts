import { request } from "../../utils/api";
import { IGetIngredientsResponce } from "../../utils/types";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "../constants";

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

export type TBurgerIngredientsUnionAction =
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

export const getIngredients = () => (dispatch: any) => {
  dispatch(getIngredientsRequestAction());
  request<IGetIngredientsResponce>("ingredients").then((res) => {
    if (res && res.success) {
      dispatch(getIngredientsSuccessAction(res));
    } else {
      dispatch(getIngredientsErrorAction());
    }
  });
};
