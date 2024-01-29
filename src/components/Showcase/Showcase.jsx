import styles from "./Showcase.module.scss";

const Showcase = () => {
  return (
    <div className={styles.showcase}>
      <img
        className={styles.showcase__img}
        src="/showcase.jpg"
        alt="Melbourne University Cheer and Dance Open University Hip-hop Team - MU Hawks"
      />
      <div className={styles.showcase__overlay}>
        <h1 className={styles.showcase__overlay__heading}>
          Melbourne University Cheer and Dance
        </h1>
      </div>
    </div>
  );
};

export default Showcase;
