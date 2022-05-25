import styles from "./Layout.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Container from "../UI/Container";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import getAuthTokenFromCookie from "../../utils/helpers/getAuthToken";

const Layout = ({ children, authToken }) => {
  const { token } = useSelector((state) => state.auth);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    authToken
      ? setIsAuthenticated(authToken === token)
      : setIsAuthenticated(getAuthTokenFromCookie() === token);
  }, [authToken, token]);

  return (
    <Container className={styles.layout}>
      <Header isAuthenticated={isAuthenticated} />
      <Main>{children}</Main>
      {/* <Footer /> */}
    </Container>
  );
};

export default Layout;
