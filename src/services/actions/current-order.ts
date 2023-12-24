import { SET_CURRENT_ORDER } from "../constants/current-order";

export const setCurrentOrderAction = (order: any) => {
  return { type: SET_CURRENT_ORDER, payload: order };
};
