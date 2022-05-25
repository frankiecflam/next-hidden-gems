import styles from "./HeaderNav.module.css";

import NavBrand from "./NavBrand";
import NavList from "./NavList";
import NavButtons from "./NavButtons";

const HeaderNav = ({ isAuthenticated }) => {
  return (
    <nav className={styles.nav}>
      <NavBrand />
      {isAuthenticated && <NavList />}
      <NavButtons isAuthenticated={isAuthenticated} />
    </nav>
  );
};

export default HeaderNav;
