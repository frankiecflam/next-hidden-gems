import styles from "./Layout.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Container from "../UI/Container";

const Layout = () => {
  return (
    <Container className={styles.layout}>
      <Header />

      <Footer />
    </Container>
  );
};

export default Layout;
