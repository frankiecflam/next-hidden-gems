import styles from "./ExploreHeader.module.css";
import SearchBar from "../UI/SearchBar";
import Category from "./Category";

const ExploreHeader = ({
  onCategoryChange,
  onSearchChange,
  categories,
  searchTerm,
}) => {
  return (
    <header className={styles.header}>
      <SearchBar onSearchChange={onSearchChange} value={searchTerm} />
      <Category onCategoryChange={onCategoryChange} categories={categories} />
    </header>
  );
};

export default ExploreHeader;
