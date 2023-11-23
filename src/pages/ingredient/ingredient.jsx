import { useSelector } from "react-redux";
import Modal from "../../components/modal/modal";
import {IngredientDetails} from "../../components/ingredient-details/ingredient-details";
import { useParams } from "react-router-dom";

export const IngredientPage = () => {
  const { id } = useParams();
  const currentIngredient = useSelector((store) => store.currentIngredient.ingredient);
  const { modal } = useSelector((store) => store.modal);
  const { data } = useSelector((store) => store.ingredients);
  const [viewIngredient] = data.filter((el) => el._id === id);

  return (
    <>
      {modal ? (
        <Modal title={"Детали ингредиента"}>
          <IngredientDetails currentIngredient={currentIngredient} />
        </Modal>
      ) : (
        <IngredientDetails currentIngredient={viewIngredient} />
      )}
    </>
  );
};
