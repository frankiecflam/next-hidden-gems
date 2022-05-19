import styles from "./NavList.module.css";

import {
  HomeIcon,
  ExploreIcon,
  CollectionIcon,
  AddIcon,
  UserIcon,
} from "../../assets/icons";
import NavItem from "./NavItem";
import NavSearchBar from "./NavSearchBar";

const NavList = () => {
  return (
    <ul className={styles.navList}>
      <NavSearchBar />
      <NavItem href="/">
        <HomeIcon />
      </NavItem>

      <NavItem href="/explore">
        <ExploreIcon />
      </NavItem>

      <NavItem href="/collection">
        <CollectionIcon />
      </NavItem>

      <NavItem href="/newgem">
        <AddIcon />
      </NavItem>

      <NavItem href="/gemmer">
        <UserIcon />
      </NavItem>
    </ul>
  );
};

export default NavList;
