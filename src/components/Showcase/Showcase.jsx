import styles from "./Showcase.module.scss";
import Button from "../Button/Button.jsx";

const Showcase = () => {
  return (
    <div className={styles.showcase}>
      <img
        className={styles.showcase__img}
        src="/showcase.jpg"
        alt="Melbourne University Cheer and Dance Open University Hip-hop Team - MU Hawks"
      />
      <div className={styles.showcase__overlay}>
        <div className={styles.showcase__overlay__content}>
          <h1 className={styles.showcase__overlay__content__heading}>
            Melbourne University Cheer and Dance
          </h1>
          <Button label={"Join Us!"} />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
