import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "../../constants/burger-ingredients";
import { TBurgerIngredientsUnionActions } from "../../types/burger-ingredients";
import { IIngredient } from "../../../utils/interfaces";

export interface IStateIngredients {
  readonly data: IIngredient[] | [];
  readonly loading: boolean;
  readonly error: boolean;
}

export const initialState: IStateIngredients = {
  data: [],
  loading: false,
  error: false,
};

export const burgerIngredients = (
  state = initialState,
  action: TBurgerIngredientsUnionActions
): IStateIngredients => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: false,
      };

    case GET_INGREDIENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };

    default:
      return state;
  }
};
