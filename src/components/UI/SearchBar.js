import styles from "./SearchBar.module.css";
import { SearchIcon } from "../../assets/icons";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <SearchIcon className={styles.searchIcon} />
      <input type="text" className={styles.input} placeholder="Search"/>
    </div>
  );
};

export default SearchBar;
