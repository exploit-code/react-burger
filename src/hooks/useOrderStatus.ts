import { useState, useEffect } from "react";

export const useOrderStatus = (orderStatus: string) => {
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    const getOrderStatus = (status: string) => {
      switch (status) {
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

    if (orderStatus) {
      setStatus(getOrderStatus(orderStatus));
    }
  }, [orderStatus]);

  return {
    status,
  };
};
