import { useState } from "react";

export interface IUseFormData {
  [key: string]: string;
}

export interface IUseFormDataReturn {
  value: IUseFormData;
  setValue: React.Dispatch<React.SetStateAction<IUseFormData>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useFormData = (props: IUseFormData): IUseFormDataReturn => {
  const [value, setValue] = useState<IUseFormData>(props);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue({ ...value, [e.target.name]: e.target.value });

  return { value, setValue, handleChange };
};
