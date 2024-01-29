import styles from "./IntroCard.module.scss";
import TextLink from "../TextLink/TextLink";

const IntroCard = ({ title, text, links }) => {
  return (
    <article className={styles.card}>
      <h2>{title}</h2>
      {text.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
      <div className={styles.card__links}>
        {links.map((link) => (
          <TextLink path={link.path} label={link.label} />
        ))}
      </div>
    </article>
  );
};

export default IntroCard;
