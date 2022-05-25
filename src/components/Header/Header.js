import styles from "./Header.module.css";

import HeaderNav from "./HeaderNav";
import Container from "../UI/Container";

const Header = ({ isAuthenticated }) => {
  return (
    <header className={styles.header}>
      <Container>
        <HeaderNav isAuthenticated={isAuthenticated} />
      </Container>
    </header>
  );
};

export default Header;
