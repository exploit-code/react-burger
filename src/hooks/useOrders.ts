import { useState, useCallback } from "react";

export const useUpgradeOrders = ({ orders, data }: any) => {
  const [upgradedOrders, setUpgradedOrders] = useState([]);

  const upgradeOrders = useCallback(() => {
    const updatedOrders = orders.map((order: any) => {
      const upgradedIngredients = order.ingredients.reduce((acc: any, ingredientId: string) => {
        const foundIngredient = data.find((ingredient: any) => ingredient._id === ingredientId);
        const existingIngredient = acc.find((item: any) => item._id === ingredientId);

        if (foundIngredient) {
          if (existingIngredient) existingIngredient.count++;
          else acc.push({ ...foundIngredient, count: 1 });
        }

        return acc;
      }, []);

      const totalPrice = upgradedIngredients.reduce((total: number, ingredient: any) => {
        return total + ingredient.price * ingredient.count;
      }, 0);

      return {
        ...order,
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
