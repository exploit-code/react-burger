import { SET_CURRENT_ORDER } from "../constants/current-order";
// import { TIngredientDetailsUnionActions } from "../types/ingredient-details";
// import { IIngredient } from "../../utils/common-types";

// interface IStateCurrentIngredient {
//   readonly ingredient: null | IIngredient;
// }

const initialState = {
  order: null,
};

export const currentOrder = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CURRENT_ORDER:
      return {
        ...state,
        order: action.payload,
      };

    default:
      return state;
  }
};
