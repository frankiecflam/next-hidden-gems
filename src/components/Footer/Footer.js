import styles from "./Footer.module.css";

import FooterNav from "./FooterNav";
import Container from "../UI/Container";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <FooterNav />
      </Container>
    </footer>
  );
};

export default Footer;
