import { IIngredient } from "../../utils/types";
import { SET_CURRENT_INGREDIENT } from "../constants";
import { AppThunk, AppDispatch } from "../types";

interface ISetCurrentIngredientAction {
  readonly type: typeof SET_CURRENT_INGREDIENT;
  readonly payload: IIngredient;
}

export type TIngredientDetailsUnionAction = ISetCurrentIngredientAction;

const setCurrentIngredientAction = (ingredient: IIngredient): ISetCurrentIngredientAction => ({
  type: SET_CURRENT_INGREDIENT,
  payload: ingredient,
});

export const setCurrentIngredientThunk: AppThunk =
  (ingredient: IIngredient) => (dispatch: AppDispatch) => {
    dispatch(setCurrentIngredientAction(ingredient));
  };
