import { IUseOrdersCombaine } from "../../utils/interfaces";
import {
  COMBINE_ORDERS_CLEAR,
  COMBINE_ORDERS_UPDATED,
  COMBINE_ORDERS_COMPLITE,
  COMBINE_ORDERS_ERROR,
} from "../constants/combine-orders";
import {
  ICombineOrdersClear,
  ICombineOrdersUpdated,
  ICombineOrdersComplite,
  ICombineOrdersError,
} from "../types/combine-orders";

export const combineOrdersUpdated = (payload: IUseOrdersCombaine): ICombineOrdersUpdated => ({
  type: COMBINE_ORDERS_UPDATED,
  payload: payload,
});

export const combineOrdersComplite = (): ICombineOrdersComplite => ({
  type: COMBINE_ORDERS_COMPLITE,
});

export const combineOrdersError = (): ICombineOrdersError => ({
  type: COMBINE_ORDERS_ERROR,
});

export const combineOrdersClear = (): ICombineOrdersClear => ({
  type: COMBINE_ORDERS_CLEAR,
});
