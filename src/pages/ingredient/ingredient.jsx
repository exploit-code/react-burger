import { useParams } from "react-router-dom";

export const IngredientPage = () => {
  const { id } = useParams();
  return <>{id}</>;
};
