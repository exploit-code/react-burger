import {
  COMBINE_ORDERS_COMPLITE,
  COMBINE_ORDERS_CLEAR,
  COMBINE_ORDERS_UPDATED,
  COMBINE_ORDERS_ERROR,
} from "../constants/combine-orders";
import { IUseOrdersCombaine } from "../../utils/interfaces";

export interface ICombineOrdersClearAction {
  readonly type: typeof COMBINE_ORDERS_CLEAR;
}

export interface ICombineOrdersUpdatedAction {
  readonly type: typeof COMBINE_ORDERS_UPDATED;
  readonly payload: IUseOrdersCombaine;
}

export interface ICombineOrdersErrorAction {
  readonly type: typeof COMBINE_ORDERS_ERROR;
}

export interface ICombineOrdersCompliteAction {
  readonly type: typeof COMBINE_ORDERS_COMPLITE;
}

export type TCombineOrdersUnionActions =
  | ICombineOrdersClearAction
  | ICombineOrdersUpdatedAction
  | ICombineOrdersErrorAction
  | ICombineOrdersCompliteAction;
