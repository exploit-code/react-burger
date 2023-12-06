import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./bun.module.scss";
import { IBunProps } from "../../utils/types";

export const Bun = ({ type, isLocked, text, price, thumbnail }: IBunProps) => {
  return (
    <div className={styles.bun}>
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
