import { useState, ChangeEvent } from "react";

interface FormData {
  [key: string]: string;
}

interface UseFormDataProps {
  [key: string]: string;
}

interface UseFormDataReturn {
  value: FormData;
  setValue: React.Dispatch<React.SetStateAction<FormData>>;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const useFormData = (props: UseFormDataProps): UseFormDataReturn => {
  const [value, setValue] = useState<FormData>(props);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue({ ...value, [e.target.name]: e.target.value });
  return { value, setValue, handleChange };
};
