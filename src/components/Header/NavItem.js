import styles from "./NavItem.module.css";

import Link from "next/link";

const NavItem = ({ children, href }) => {
  return (
    <li className={styles.navItem}>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  );
};

export default NavItem;
