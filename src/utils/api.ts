import { IRequestOptions, ICheckSuccess } from "./common-types";

const BASE_URL = "https://norma.nomoreparties.space/api/";

const checkResponse = <T>(res: Response): Promise<T> => {
  if (res.ok) return res.json() as Promise<T>;
  else return Promise.reject(`Ошибка ${res.status}`);
};

const checkSuccess = <T extends ICheckSuccess>(res: T): Promise<T> => {
  if (res.success) return Promise.resolve(res);
  else return Promise.reject(`Ответ не success: ${res}`);
};

export const request = <T extends ICheckSuccess>(
  endpoint: string,
  options?: IRequestOptions
): Promise<T> => {
  return fetch(`${BASE_URL}${endpoint}`, options)
    .then(checkResponse<T>)
    .then(checkSuccess<T>);
};
