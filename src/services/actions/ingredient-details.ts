import { IIngredient } from "../../utils/types";
import { SET_CURRENT_INGREDIENT, CLEAR_CURRENT_INGREDIENT } from "../constants";

interface ISetCurrentIngredientAction {
  readonly type: typeof SET_CURRENT_INGREDIENT;
  readonly payload: IIngredient;
}

interface IClearCurrentIngredientAction {
  readonly type: typeof CLEAR_CURRENT_INGREDIENT;
}

export type IIngredientDetailsUnionAction =
  | ISetCurrentIngredientAction
  | IClearCurrentIngredientAction;

const setCurrentIngredientAction = (
  ingredient: IIngredient
): ISetCurrentIngredientAction => ({
  type: SET_CURRENT_INGREDIENT,
  payload: ingredient,
});

const clearCurrentIngredientAction = (): IClearCurrentIngredientAction => ({
  type: CLEAR_CURRENT_INGREDIENT,
});

export const setCurrentIngredient = (ingredient: IIngredient) => (dispatch: any) => {
  dispatch(setCurrentIngredientAction(ingredient));
};

export const clearCurrentIngredient = () => (dispatch: any) => {
  dispatch(clearCurrentIngredientAction());
};
