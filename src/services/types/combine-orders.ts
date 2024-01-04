import {
  COMBINE_ORDERS_COMPLITE,
  COMBINE_ORDERS_CLEAR,
  COMBINE_ORDERS_UPDATED,
  COMBINE_ORDERS_ERROR,
} from "../constants/combine-orders";
import { IUseOrdersCombaine } from "../../utils/interfaces";

export interface ICombineOrdersClear {
  readonly type: typeof COMBINE_ORDERS_CLEAR;
}

export interface ICombineOrdersUpdated {
  readonly type: typeof COMBINE_ORDERS_UPDATED;
  readonly payload: IUseOrdersCombaine;
}

export interface ICombineOrdersError {
  readonly type: typeof COMBINE_ORDERS_ERROR;
}

export interface ICombineOrdersComplite {
  readonly type: typeof COMBINE_ORDERS_COMPLITE;
}

export type TCombineOrdersUnionActions =
  | ICombineOrdersClear
  | ICombineOrdersUpdated
  | ICombineOrdersError
  | ICombineOrdersComplite;
