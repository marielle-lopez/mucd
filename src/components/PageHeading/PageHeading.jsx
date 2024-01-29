import styles from "./PageHeading.module.scss";

const PageHeading = ({ title }) => {
  return <h1 className={styles.heading}>{title}</h1>;
};

export default PageHeading;
