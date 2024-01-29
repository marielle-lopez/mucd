import styles from "./BioCard.module.scss";
import Subheading from "../Subheading/Subheading";
import SmallHeading from "../SmallHeading/SmallHeading";

const BioCard = ({
  img = { path: "/placeholder.png", alt: "Placeholder" },
  role = "Role",
  name = "Name",
  text = ["Text"],
}) => {
  return (
    <article className={styles.biocard}>
      <img className={styles.biocard__img} src={img.path} alt={img.alt} />
      <div>
        <Subheading title={name} />
        <SmallHeading title={role} />
        {text.map((paragraph) => (
          <p className={styles.biocard__paragraph} key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
};

export default BioCard;
