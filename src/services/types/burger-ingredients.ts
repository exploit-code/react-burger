import { IGetIngredientsResponce } from "../../utils/common-types";
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

export type TBurgerIngredientsUnionActions =
  | IGetIngredientsRequestAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsErrorAction;
