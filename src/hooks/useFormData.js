import { useState } from "react";

export const useFormData = (props) => {
  const [value, setValue] = useState(props);
  const handleChange = (e) => setValue({ ...value, [e.target.name]: e.target.value });
  return { value, setValue, handleChange };
};
