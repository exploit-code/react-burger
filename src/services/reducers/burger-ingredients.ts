import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "../constants";
import { TBurgerIngredientsUnionAction } from "../actions/burger-ingredients";
import { IIngredient } from "../../utils/types";

export interface IStateIngredients {
  readonly data: IIngredient[];
  readonly loading: boolean;
  readonly error: boolean;
}

const initialState: IStateIngredients = {
  data: [],
  loading: false,
  error: false,
};

export const ingredients = (
  state = initialState,
  action: TBurgerIngredientsUnionAction
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
