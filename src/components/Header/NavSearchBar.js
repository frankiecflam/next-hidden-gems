import styles from "./NavSearchBar.module.css";

import SearchBar from "../UI/SearchBar";

const NavSearchBar = () => {
  return (
    <div className={styles.navSearchBar}>
      <SearchBar />
    </div>
  );
};

export default NavSearchBar;
