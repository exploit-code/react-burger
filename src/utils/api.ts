import { IRequestOptions, IResponseData } from "../utils/types";

const BASE_URL = "https://norma.nomoreparties.space/api/";

const checkResponse = (res: Response) => {
  if (res.ok) return res.json();
  else return Promise.reject(`Ошибка ${res.status}`);
};

const checkSuccess = (res: IResponseData) => {
  if (res && res.success) return res;
  else return Promise.reject(`Ответ не success: ${res}`);
};

export const request = (
  endpoint: string,
  options: IRequestOptions | undefined
): Promise<IResponseData> => {
  return fetch(`${BASE_URL}${endpoint}`, options).then(checkResponse).then(checkSuccess);
};
