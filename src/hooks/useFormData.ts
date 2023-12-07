import { useState } from "react";
import { IUseFormData, IUseFormDataReturn } from "../utils/types";

export const useFormData = (props: IUseFormData): IUseFormDataReturn => {
  const [value, setValue] = useState<IUseFormData>(props);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue({ ...value, [e.target.name]: e.target.value });

  return { value, setValue, handleChange };
};
