import styles from "./SmallHeading.module.scss";

const SmallHeading = ({ title }) => {
  return <h3 className={styles.small_heading}>{title}</h3>;
};

export default SmallHeading;
