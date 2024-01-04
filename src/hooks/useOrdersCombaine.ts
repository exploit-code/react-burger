import { useState, useCallback } from "react";
import {
  IIngredient,
  IOrder,
  IIngredientUpgrade,
  IUpdatedOrder,
  IUseOrdersCombaine,
} from "../utils/interfaces";

export const useOrdersCombaine = ({ orders, data }: IUseOrdersCombaine) => {
  const [upgradedOrders, setUpgradedOrders] = useState<IUpdatedOrder[]>([]);

  const upgradeOrders = useCallback(() => {
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

    setUpgradedOrders(updatedOrders);
  }, [orders, data]);

  return {
    upgradedOrders,
    upgradeOrders,
    setInitialOrders: setUpgradedOrders,
  };
};
