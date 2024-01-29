import styles from "./IntroCard.module.scss";
import TextLink from "../TextLink/TextLink";

const IntroCard = ({ img, title, text, links }) => {
  return (
    <article className={styles.card}>
      <img className={styles.card__img} src={img.path} alt={img.alt} />
      <h2 className={styles.card__heading}>{title}</h2>
      {text.map((paragraph) => (
        <p className={styles.card__paragraph} key={paragraph}>
          {paragraph}
        </p>
      ))}
      <div className={styles.card__links}>
        {links.map((link) => (
          <TextLink key={link.path} path={link.path} label={link.label} />
        ))}
      </div>
    </article>
  );
};

export default IntroCard;
