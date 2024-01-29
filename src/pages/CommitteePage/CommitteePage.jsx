import styles from "./CommitteePage.module.scss";
import data from "../../data/committee-data.json";
import MainWrapper from "../../containers/MainWrapper/MainWrapper";
import PageHeading from "../../components/PageHeading/PageHeading";
import BioCardList from "../../containers/BioCardList/BioCardList";

const CommitteePage = () => {
  return (
    <MainWrapper>
      <PageHeading title={"The Committee"} />
      <BioCardList data={data} />
    </MainWrapper>
  );
};

export default CommitteePage;
