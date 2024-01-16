import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./bun.module.scss";
import { IBun } from "../../utils/interfaces";

export const Bun = ({ type, isLocked, text, price, thumbnail }: IBun) => {
  return (
    <div className={styles.bun} data-testid={type}>
      <ConstructorElement
        type={type}
        isLocked={isLocked}
        text={text}
        price={price}
        thumbnail={thumbnail}
      />
    </div>
  );
};
