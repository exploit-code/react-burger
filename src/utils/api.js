const API_URL = "https://norma.nomoreparties.space/api";

const checkResponce = (res) => (res.ok ? res.json() : res.json().then((err) => PromiseRejectionEvent.reject(err)));

export const fetchIngredients = async () => {
  const res = await fetch(`${API_URL}/ingredients`);
  const data = await checkResponce(res);
  if (data?.success) return data.data;
  else return Promise.reject(data);
};

export const fetchOrderNumber = async (ingredientsID) => {
  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(ingredientsID),
  });
  const data = await checkResponce(res);
  if (data?.success) return data.order.number;
  else return Promise.reject(data);
};
