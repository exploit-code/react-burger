const BASE_URL = "https://norma.nomoreparties.space/api/";

const checkResponse = (res) => {
  if (res.ok) return res.json();
  else return Promise.reject(`Ошибка ${res.status}`);
};

const checkSuccess = (res) => {
  if (res && res.success) return res;
  else return Promise.reject(`Ответ не success: ${res}`);
};

export const request = (endpoint, options) => {
  return fetch(`${BASE_URL}${endpoint}`, options).then(checkResponse).then(checkSuccess);
};
