import styles from "./Subheading.module.scss";

const Subheading = ({ title }) => {
  return <h2 className={styles.subheading}>{title}</h2>;
};

export default Subheading;
