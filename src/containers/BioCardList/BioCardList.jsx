import styles from "./BioCardList.module.scss";
import BioCard from "../../components/BioCard/BioCard";

const BioCardList = ({ data }) => {
  return (
    <div className={styles.card_list}>
      {data &&
        data.map((item, i) => (
          <>
            <BioCard
              key={item.name}
              role={item.role}
              name={item.name}
              text={item.text}
            />
            {i !== data.length - 1 && <hr className={styles.card_list__hr} />}
          </>
        ))}
    </div>
  );
};

export default BioCardList;
