import { useCallback } from "react";

export const useEnterKeySubmit = (submitFunction) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") submitFunction(e);
    },
    [submitFunction]
  );
  return handleKeyDown;
};
