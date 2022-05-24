import styles from "./index.module.css";
import HomeHero from "../components/Home/HomeHero";
import Masonry from "../components/Masonry/Masonry";
import getAuthTokenFromCookie from "../utils/helpers/getAuthToken";
import useAuth from "../utils/hooks/useAuth";

const Home = ({ authToken }) => {
  const isAuthenticated = useAuth(authToken);

  return (
    <section className={styles.home}>
      {!isAuthenticated && <HomeHero />}
      {isAuthenticated && <Masonry />}
    </section>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const authToken = getAuthTokenFromCookie(context);

  return {
    props: {
      authToken,
    },
  };
}
