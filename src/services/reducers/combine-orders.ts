import { IIngredient, IOrder, IIngredientUpgrade, IUpdatedOrder } from "../../utils/interfaces";
import {
  COMBINE_ORDERS_CLEAR,
  COMBINE_ORDERS_COMPLITE,
  COMBINE_ORDERS_ERROR,
  COMBINE_ORDERS_UPDATED,
} from "../constants/combine-orders";
import { TCombineOrdersUnionActions } from "../types/combine-orders";

export interface ICombineOrders {
  updatedOrders: IUpdatedOrder[];
  loading: boolean;
  error: boolean;
}

const initialState: ICombineOrders = {
  updatedOrders: [],
  loading: false,
  error: false,
};

export const combineOrders = (
  state = initialState,
  action: TCombineOrdersUnionActions
): ICombineOrders => {
  switch (action.type) {
    case COMBINE_ORDERS_UPDATED:
      const { orders, data } = action.payload;

      const updatedOrders: IUpdatedOrder[] = orders.map((order: IOrder) => {
        const upgradedIngredients = order.ingredients.reduce(
          (acc: IIngredientUpgrade[], ingredientId: string) => {
            const foundIngredient = data.find(
              (ingredient: IIngredient) => ingredient._id === ingredientId
            );
            const existingIngredient = acc.find(
              (item: IIngredientUpgrade) => item._id === ingredientId
            );

            if (foundIngredient) {
              if (existingIngredient) {
                existingIngredient.count++;
              } else acc.push({ ...foundIngredient, count: 1 });
            }

            return acc;
          },
          []
        );

        const totalPrice = upgradedIngredients.reduce((total, ingredient) => {
          return total + ingredient.price * ingredient.count;
        }, 0);

        const upgradeOrderStatus = () => {
          switch (order.status) {
            case "done":
              return "Выполнен";
            case "created":
              return "Создан";
            case "pending":
              return "Готовится";
            default:
              return "Статус неизвестен";
          }
        };

        return {
          ...order,
          upgradeStatus: upgradeOrderStatus(),
          ingredients: upgradedIngredients,
          totalPrice: totalPrice,
        };
      });

      return {
        ...state,
        loading: true,

        updatedOrders: updatedOrders,
      };

    case COMBINE_ORDERS_COMPLITE:
      return {
        ...state,
        loading: false,
      };

    case COMBINE_ORDERS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case COMBINE_ORDERS_CLEAR:
      return initialState;
    default:
      return state;
  }
};
