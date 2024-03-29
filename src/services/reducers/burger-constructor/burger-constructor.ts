import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  REMOVE_ALL_INGREDIENTS,
  MOVE_INGREDIENT,
} from "../../constants/burger-constructor";
import { IConstructorIngredient } from "../../../utils/interfaces";
import { TBurgerConstructorUnionActions } from "../../types/burger-constructor";

export interface IStateConstructorIngredients {
  readonly bun: IConstructorIngredient | null;
  readonly ingredients: IConstructorIngredient[];
}

export const initialState: IStateConstructorIngredients = {
  bun: null,
  ingredients: [],
};

export const burgerConstructor = (
  state = initialState,
  action: TBurgerConstructorUnionActions
): IStateConstructorIngredients => {
  switch (action.type) {
    case ADD_INGREDIENT:
      if (action.payload.type === "bun") {
        return {
          ...state,
          bun: action.payload,
        };
      } else {
        return {
          ...state,
          ingredients: [...state.ingredients, action.payload],
        };
      }

    case REMOVE_INGREDIENT:
      const removedElementIndex = state.ingredients.findIndex(
        (item) => item._id === action.payload._id
      );
      if (removedElementIndex === -1) {
        return state;
      }
      const updIngredients = [...state.ingredients];
      updIngredients.splice(removedElementIndex, 1);
      return {
        ...state,
        ingredients: updIngredients,
      };

    case REMOVE_ALL_INGREDIENTS:
      return initialState;

    case MOVE_INGREDIENT:
      const { fromIndex, toIndex } = action.payload;
      const movedIngredient = state.ingredients[fromIndex];
      const updatedIngredients = [...state.ingredients];
      updatedIngredients.splice(fromIndex, 1);
      updatedIngredients.splice(toIndex, 0, movedIngredient);
      return {
        ...state,
        ingredients: updatedIngredients,
      };

    default:
      return state;
  }
};
