export interface IIngredient {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
}

export interface IConstructorIngredient extends IIngredient {
  uuid: string;
}

export interface IConstructorDraggedItem<T> {
  type: string;
  ingredient: T;
  index: number;
}

export interface IBun {
  type: "top" | "bottom";
  isLocked: boolean;
  text: string;
  price: number;
  thumbnail: string;
}

export interface IUseModal {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export interface IUseFormData {
  name?: string;
  email?: string;
  password?: string;
  token?: string;
}

export interface IUseFormDataReturn {
  value: IUseFormData;
  setValue: React.Dispatch<React.SetStateAction<IUseFormData>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IModal {
  title?: string;
  children: React.ReactNode;
  closeModal: IUseModal["closeModal"];
}

export interface INutrientLabels {
  label: string;
  value: number;
  id: number;
}
export interface IProtectedRoute {
  children: JSX.Element;
  anonymous: boolean;
}

export interface IRequestOptions {
  method: string;
  headers: Record<string, string>;
  body?: string;
}

export interface ICheckSuccess {
  success: boolean;
}

export interface IGetIngredientsResponce extends ICheckSuccess {
  data: IIngredient[];
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse extends ICheckSuccess {
  accessToken: string;
  refreshToken: string;
  user: {
    email: string;
    name: string;
  };
}

export interface IRegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface IRegisterResponse extends ICheckSuccess {
  accessToken: string;
  refreshToken: string;
  user: {
    email: string;
    name: string;
  };
}

export interface IForgotPasswordRequest {
  email: string;
}

export interface IForgotPasswordResponse extends ICheckSuccess {
  message: string;
}

export interface IResetPasswordRequest {
  password: string;
  token: string;
}

export interface IResetPasswordResponse extends ICheckSuccess {
  message: string;
}

export interface ILogoutRequest {
  token: string;
}

export interface ILogoutResponse extends ICheckSuccess {
  message: string;
}

export interface IGetUserRequest {
  token: string;
}

export interface IGetUserResponse extends ICheckSuccess {
  user: {
    email: string;
    name: string;
  };
}

export interface IUpdateUserRequest extends IGetUserResponse {
  accessToken: string;
}

export interface IUpdateUserResponse extends ICheckSuccess, IGetUserResponse {}

export interface IUpdateTokenRequest extends IGetUserRequest {}

export interface IUpdateTokenResponse extends ICheckSuccess {
  accessToken: string;
  refreshToken: string;
}

export interface IGetOrderNumberRequest extends ICheckSuccess {
  name: string;
  order: {
    number: number;
  };
  success: boolean;
}

export interface IMoveIngredient {
  fromIndex: number;
  toIndex: number;
}

export interface IUser {
  name: string;
  email: string;
}
