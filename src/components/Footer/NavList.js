import styles from "./NavList.module.css";
import NavItem from "../Header/NavItem";

import { HomeIcon, ExploreIcon, UserIcon } from "../../assets/icons";

const NavList = () => {
  return (
    <ul className={styles.navList}>
      <NavItem href="/">
        <HomeIcon />
      </NavItem>

      <NavItem href="/explore">
        <ExploreIcon />
      </NavItem>

      <NavItem href="/gemmer">
        <UserIcon />
      </NavItem>
    </ul>
  );
};

export default NavList;
