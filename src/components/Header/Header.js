import styles from "./Header.module.css";

import HeaderNav from "./HeaderNav";
import Container from "../UI/Container";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <HeaderNav />
      </Container>
    </header>
  );
};

export default Header;
