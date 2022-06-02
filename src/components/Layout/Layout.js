import styles from "./Layout.module.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Container from "../UI/Container";

const Layout = ({ pageProps, children }) => {
  const { currentUserId } = pageProps;

  return (
    <Container className={styles.layout}>
      <Header currentUserId={currentUserId} />
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
