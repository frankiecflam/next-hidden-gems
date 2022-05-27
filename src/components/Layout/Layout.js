import styles from "./Layout.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Container from "../UI/Container";

const Layout = ({ children, currentUserId }) => {
  return (
    <Container className={styles.layout}>
      <Header currentUserId={currentUserId} />
      <Main>{children}</Main>
      {/* <Footer /> */}
    </Container>
  );
};

export default Layout;
