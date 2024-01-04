import { request } from "../../utils/api";
import { IGetIngredientsResponce } from "../../utils/interfaces";
import {
  getIngredientsError,
  getIngredientsRequest,
  getIngredientsSuccess,
} from "../actions/burger-ingredients";
import { AppThunk } from "../types";

export const getIngredientsThunk = (): AppThunk => (dispatch) => {
  dispatch(getIngredientsRequest());
  return request<IGetIngredientsResponce>("ingredients")
    .then((res) => {
      dispatch(getIngredientsSuccess(res));
    })
    .catch(() => {
      dispatch(getIngredientsError());
    });
};
