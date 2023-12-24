import { SET_CURRENT_ORDER } from "../constants/current-order";

export interface ISetCurrentOrderAction {
  readonly type: typeof SET_CURRENT_ORDER;
  readonly payload: any;
}

export type TCurrentOrderUnionActions = ISetCurrentOrderAction;
