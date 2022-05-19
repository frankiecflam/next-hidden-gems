import styles from "./Header.module.css";

import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderNav />
    </header>
  );
};

export default Header;
