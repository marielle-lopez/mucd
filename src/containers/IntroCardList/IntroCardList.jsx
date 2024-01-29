import styles from "./IntroCardList.module.scss";
import IntroCard from "../../components/IntroCard/IntroCard";
import data from "../../data/intro-card-data.json";

const IntroCardList = () => {
  return (
    <section className={styles.cards}>
      {data &&
        data.map((item) => (
          <IntroCard
            key={item.title}
            title={item.title}
            text={item.text}
            links={item.links}
          />
        ))}
    </section>
  );
};

export default IntroCardList;
