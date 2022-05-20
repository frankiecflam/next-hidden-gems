import styles from "./Layout.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Pages from "../Pages/Pages";
import Container from "../UI/Container";

const Layout = () => {
  return (
    <Container className={styles.layout}>
      <Header />
      <Pages />
      <Footer />
    </Container>
  );
};

export default Layout;
