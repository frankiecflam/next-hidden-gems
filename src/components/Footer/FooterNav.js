import styles from "./FooterNav.module.css";

import NavList from "./NavList";

const FooterNav = () => {
  return (
    <nav className={styles.nav}>
      <NavList />
    </nav>
  );
};

export default FooterNav;
