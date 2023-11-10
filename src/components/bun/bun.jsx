import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./bun.module.scss";
import PropTypes from "prop-types";

const Bun = ({ type, isLocked, text, price, thumbnail }) => {
  return (
    <div className={styles.bun}>
      <ConstructorElement type={type} isLocked={isLocked} text={text} price={price} thumbnail={thumbnail} />
    </div>
  );
};

Bun.propTypes = {
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  text: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
};

export default Bun;
