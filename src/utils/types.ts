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
  body: string;
}

export interface IResponseData {
  success: boolean;
  message?: string;
  user?: {
    email: string;
    name: string;
  };
  accessToken?: string;
  refreshToken?: string;
}
