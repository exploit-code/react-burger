import { IUpdatedOrder } from "../../utils/interfaces";
import { SET_CURRENT_ORDER } from "../constants/current-order";

export interface ISetCurrentOrderAction {
  readonly type: typeof SET_CURRENT_ORDER;
  readonly payload: IUpdatedOrder;
}

export type TCurrentOrderUnionActions = ISetCurrentOrderAction;
