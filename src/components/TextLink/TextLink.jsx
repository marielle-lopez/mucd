import styles from "./TextLink.module.scss";
import { Link } from "react-router-dom";

const TextLink = ({ path, label }) => {
  return (
    <Link className={styles.link} to={path}>
      {label}
    </Link>
  );
};

export default TextLink;
