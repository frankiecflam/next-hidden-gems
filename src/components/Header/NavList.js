import styles from "./NavList.module.css";

import {
  HomeIcon,
  ExploreIcon,
  CollectionIcon,
  AddIcon,
  UserIcon,
} from "../../assets/icons";
import NavItem from "./NavItem";

const NavList = ({ currentUserId }) => {
  return (
    <ul className={styles.navList}>
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

      {/* Hard Code for the moment */}
      <NavItem href={`/gemmer/${currentUserId}`}>
        <UserIcon />
      </NavItem>
    </ul>
  );
};

export default NavList;
