import { useState, useCallback } from "react";

export const useUpgradeOrders = ({ orders, data }: any) => {
  const [upgradedOrders, setUpgradedOrders] = useState([]);

  const upgradeOrders = useCallback(() => {
    const updatedOrders = orders.map((order: any) => {
      const upgradedIngredients = order.ingredients.map((ingredientId: string) => {
        const foundIngredient = data.find((ingredient: any) => ingredient._id === ingredientId);
        return foundIngredient || null;
      });

      return {
        ...order,
        ingredients: upgradedIngredients.filter((ingredient: any) => ingredient),
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
