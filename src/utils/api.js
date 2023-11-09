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

// export const BASE_URL = "https://norma.nomoreparties.space/api/";

// const checkResponse = (res) => {
//   if (res.ok) return res.json();
//   else return Promise.reject(`Ошибка ${res.status}`);
// };

// const checkSuccess = (res) => {
//   if (res && res.success) return res;
//   else return Promise.reject(`Ответ не success: ${res}`);
// };

// export const request = (endpoint, options) => {
//   fetch(`${BASE_URL}${endpoint}`, options)
//     .then(checkResponse)
//     .then(checkSuccess);
// };
