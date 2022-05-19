import styles from "./NavBrand.module.css";

import Link from "next/link";

const NavBrand = () => {
  return (
    <div className={styles.navBrand}>
      <Link href="/">HiddenGems</Link>
    </div>
  );
};

export default NavBrand;
