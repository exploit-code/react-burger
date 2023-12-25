import { request } from "../../utils/api";
import { IGetIngredientsResponce } from "../../utils/interfaces";
import {
  getIngredientsErrorAction,
  getIngredientsRequestAction,
  getIngredientsSuccessAction,
} from "../actions/burger-ingredients";
import { AppThunk, AppDispatch } from "../types";

export const getIngredientsThunk = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(getIngredientsRequestAction());
  request<IGetIngredientsResponce>("ingredients")
    .then((res) => {
      dispatch(getIngredientsSuccessAction(res));
    })
    .catch(() => {
      dispatch(getIngredientsErrorAction());
    });
};
