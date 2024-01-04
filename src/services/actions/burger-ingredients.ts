import { IGetIngredientsResponce } from "../../utils/interfaces";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "../constants/burger-ingredients";
import {
  IgetIngredientsError,
  IgetIngredientsRequest,
  IgetIngredientsSuccess,
} from "../types/burger-ingredients";

export const getIngredientsRequest = (): IgetIngredientsRequest => ({
  type: GET_INGREDIENTS_REQUEST,
});

export const getIngredientsSuccess = (res: IGetIngredientsResponce): IgetIngredientsSuccess => ({
  type: GET_INGREDIENTS_SUCCESS,
  payload: res,
});

export const getIngredientsError = (): IgetIngredientsError => ({
  type: GET_INGREDIENTS_ERROR,
});
