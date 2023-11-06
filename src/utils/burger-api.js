const BURGER_API_URL = "https://norma.nomoreparties.space/api";

const checkResponce = (res) => (res.ok ? res.json() : res.json().then((err) => PromiseRejectionEvent.reject(err)));

export const fetchIngredients = async () => {
  const res = await fetch(`${BURGER_API_URL}/ingredients`);
  const data = await checkResponce(res);
  if (data?.success) return data.data;
  else return Promise.reject(data);
};
