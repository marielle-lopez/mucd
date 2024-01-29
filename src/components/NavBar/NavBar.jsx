import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const linkStyles = ({ isActive }) => {
    return isActive
      ? `${styles.nav__links__item} ${styles.nav__links__item__active}`
      : `${styles.nav__links__item}`;
  };

  return (
    <nav className={styles.nav}>
      <img
        className={styles.nav__logo}
        src="/mucd-logo.png"
        alt="Melbourne University Cheer and Dance logo"
      />
      <div className={styles.nav__links}>
        <NavLink className={linkStyles} to="/">
          Home
        </NavLink>
        <NavLink className={linkStyles} to="/styles">
          Styles
        </NavLink>
        <NavLink className={linkStyles} to="/committee">
          The Committee
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
