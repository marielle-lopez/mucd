import styles from "./CoachesPage.module.scss";
import data from "../../data/coaches-data.json";
import MainWrapper from "../../containers/MainWrapper/MainWrapper";
import PageHeading from "../../components/PageHeading/PageHeading";
import BioCardList from "../../containers/BioCardList/BioCardList";

const CoachesPage = () => {
  return (
    <MainWrapper>
      <PageHeading title="Our Coaches" />
      <BioCardList data={data} />
    </MainWrapper>
  );
};

export default CoachesPage;
