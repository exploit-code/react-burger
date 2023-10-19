import styles from "./burger-constructor-card.module.scss";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const BurgerConstructorCard = ({ name, price, image }) => {
  return (
    <div className={styles.burger_constructor_card}>
      <DragIcon type="primary" />
      <ConstructorElement text={name} price={price} thumbnail={image} />
    </div>
  );
};

BurgerConstructorCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default BurgerConstructorCard;
