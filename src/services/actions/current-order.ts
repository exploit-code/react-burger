import { IUpdatedOrder } from "../../utils/interfaces";
import { SET_CURRENT_ORDER } from "../constants/current-order";
import { ISetCurrentOrderAction } from "../types/current-order";

export const setCurrentOrderAction = (order: IUpdatedOrder): ISetCurrentOrderAction => {
  return { type: SET_CURRENT_ORDER, payload: order };
};
