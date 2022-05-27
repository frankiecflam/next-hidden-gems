import styles from "./HeaderNav.module.css";

import NavBrand from "./NavBrand";
import NavList from "./NavList";
import NavButtons from "./NavButtons";

const HeaderNav = ({ currentUserId }) => {
  const isAuthenticated = currentUserId ? true : false;

  return (
    <nav className={styles.nav}>
      <NavBrand />
      {isAuthenticated && <NavList currentUserId={currentUserId} />}
      <NavButtons isAuthenticated={isAuthenticated} />
    </nav>
  );
};

export default HeaderNav;
