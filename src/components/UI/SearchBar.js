import styles from "./SearchBar.module.css";
import { SearchIcon } from "../../assets/icons";

const SearchBar = ({ onSearchChange, value }) => {
  return (
    <div className={styles.searchBar}>
      <SearchIcon className={styles.searchIcon} />
      <input
        type="text"
        className={styles.input}
        placeholder="Search"
        onChange={onSearchChange}
        value={value}
      />
    </div>
  );
};

export default SearchBar;
