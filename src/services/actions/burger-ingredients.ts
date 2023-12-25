import { IGetIngredientsResponce } from "../../utils/interfaces";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "../constants/burger-ingredients";
import {
  IGetIngredientsErrorAction,
  IGetIngredientsRequestAction,
  IGetIngredientsSuccessAction,
} from "../types/burger-ingredients";

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
