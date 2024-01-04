import { IGetIngredientsResponce } from "../../utils/interfaces";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "../constants/burger-ingredients";

export interface IgetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IgetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly payload: IGetIngredientsResponce;
}

export interface IgetIngredientsError {
  readonly type: typeof GET_INGREDIENTS_ERROR;
}

export type TBurgerIngredientsUnionActions =
  | IgetIngredientsRequest
  | IgetIngredientsSuccess
  | IgetIngredientsError;
