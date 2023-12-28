import { IUseOrdersCombaine } from "../../utils/interfaces";
import {
  COMBINE_ORDERS_CLEAR,
  COMBINE_ORDERS_UPDATED,
  COMBINE_ORDERS_COMPLITE,
  COMBINE_ORDERS_ERROR,
} from "../constants/combine-orders";
import {
  ICombineOrdersClearAction,
  ICombineOrdersUpdatedAction,
  ICombineOrdersCompliteAction,
  ICombineOrdersErrorAction,
} from "../types/combine-orders";

export const combineOrdersUpdatedAction = (
  payload: IUseOrdersCombaine
): ICombineOrdersUpdatedAction => ({
  type: COMBINE_ORDERS_UPDATED,
  payload: payload,
});

export const combineOrdersCompliteAction = (): ICombineOrdersCompliteAction => ({
  type: COMBINE_ORDERS_COMPLITE,
});

export const combineOrdersErrorAction = (): ICombineOrdersErrorAction => ({
  type: COMBINE_ORDERS_ERROR,
});

export const combineOrdersClearAction = (): ICombineOrdersClearAction => ({
  type: COMBINE_ORDERS_CLEAR,
});
