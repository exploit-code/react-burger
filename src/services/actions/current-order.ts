import { IUpdatedOrder } from "../../utils/interfaces";
import { SET_CURRENT_ORDER } from "../constants/current-order";
import { ISetCurrentOrder } from "../types/current-order";

export const setCurrentOrder = (order: IUpdatedOrder): ISetCurrentOrder => {
  return { type: SET_CURRENT_ORDER, payload: order };
};
