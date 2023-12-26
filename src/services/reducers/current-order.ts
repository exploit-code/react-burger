import { IUpdatedOrder } from "../../utils/interfaces";
import { SET_CURRENT_ORDER } from "../constants/current-order";
import { TCurrentOrderUnionActions } from "../types/current-order";

interface IStateCurrentOrder {
  readonly order: IUpdatedOrder | null;
}

const initialState: IStateCurrentOrder = {
  order: null,
};

export const currentOrder = (state = initialState, action: TCurrentOrderUnionActions) => {
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
