import styles from "./HeaderNav.module.css";

import NavBrand from "./NavBrand";
import NavList from "./NavList";
import NavButtons from "./NavButtons";

const HeaderNav = () => {
  return (
    <nav className={styles.nav}>
      <NavBrand />
      <NavList />
      <NavButtons />
    </nav>
  );
};

export default HeaderNav;
