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

export interface IBunProps {
  type: "top" | "bottom";
  isLocked: boolean;
  text: string;
  price: number;
  thumbnail: string;
}

export interface IIngredientCardProps {
  ingredient: IIngredient;
}

export interface IConstructorIngredientCardProps {
  ingredient: IIngredient;
  index: number;
}

export interface IUseModal {
  isModalOpen?: boolean;
  openModal?: () => void;
  closeModal?: () => void;
}

export interface ICheckoutProps extends Omit<IUseModal, "isModalOpen" | "closeModal"> {}
export interface ICloseButtonProps extends Omit<IUseModal, "isModalOpen" | "openModal"> {}

export interface IModalProps extends Omit<IUseModal, "isModalOpen" | "openModal"> {
  title?: string;
  children: React.ReactNode;
}

export interface IModalOverlayProps extends Omit<IUseModal, "isModalOpen" | "openModal"> {
  children: React.ReactNode;
}
