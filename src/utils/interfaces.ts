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
  message?: string;
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

export interface ILogoutResponse extends ICheckSuccess {
  message: string;
}

export interface IUser {
  name: string;
  email: string;
  password?: string;
}

export interface IGetUserResponse extends ICheckSuccess {
  user: IUser;
}

export interface IUpdateUserRequest {
  user: IUser;
}

export interface IUpdateUserResponse extends ICheckSuccess, IGetUserResponse {}

export interface IRefreshTokenResponse extends ICheckSuccess {
  accessToken: string;
  refreshToken: string;
}

export interface IGetOrderNumberRequest extends ICheckSuccess {
  name: string;
  order: {
    number: number;
  };
}

export interface IMoveIngredient {
  fromIndex: number;
  toIndex: number;
}

export interface IIngredientID {
  ingredients: (IIngredient["_id"] | undefined)[];
}

export interface ISuccessfulOrders {
  title: string;
  quantity: number;
}

export interface IChildrenJSX {
  children: JSX.Element;
}

export interface IOrdersProgressList {
  title: string;
  list: IOrder[];
  success: boolean;
}

export interface IOrder {
  ingredients: string[];
  _id: string;
  status: string;
  number: number;
  createdAt: string;
  updatedAt: string;
  name: string;
}

export interface IIngredientUpgrade extends IIngredient {
  count: number;
}

export interface IUpdatedOrder {
  ingredients: IIngredientUpgrade[];
  _id: string;
  status: string;
  number: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  totalPrice: number;
  upgradeStatus: string;
}

export interface IUseOrdersCombaine {
  orders: IOrder[];
  data: IIngredient[];
}

export interface IOrderCard {
  renderStatus: boolean;
  order: IUpdatedOrder;
  onClick: (order: IUpdatedOrder) => void;
}
