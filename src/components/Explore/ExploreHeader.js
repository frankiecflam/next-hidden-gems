import styles from "./ExploreHeader.module.css";
import SearchBar from "../UI/SearchBar";
import Category from "./Category";

const ExploreHeader = () => {
  return (
    <header className={styles.header}>
      <SearchBar />
      <Category />
    </header>
  );
};

export default ExploreHeader;
