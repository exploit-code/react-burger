import cn from "classnames";
import styles from "./header-menu-item.module.scss";
import PropTypes from "prop-types";

const HeaderMenuItem = ({ icon, text, active }) => (
  <li>
    <a
      href="/"
      className={cn(
        styles.header_menu_item,
        {
          [styles.header_menu_item_state_active]: active,
          [styles.header_menu_item_state_inactive]: !active,
        },
        "pt-4 pb-4 pl-5 pr-5"
      )}
    >
      {icon}
      <span className="text text_type_main-default">{text}</span>
    </a>
  </li>
);

HeaderMenuItem.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default HeaderMenuItem;
