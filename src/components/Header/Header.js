import styles from "./Header.module.css";

import HeaderNav from "./HeaderNav";
import Container from "../UI/Container";

const Header = ({ currentUserId }) => {
  return (
    <header className={styles.header}>
      <Container>
        <HeaderNav currentUserId={currentUserId} />
      </Container>
    </header>
  );
};

export default Header;
