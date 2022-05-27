import styles from "./index.module.css";
import HomeHero from "../components/Home/HomeHero";
import Masonry from "../components/Masonry/Masonry";
import getAuthToken from "../utils/helpers/getAuthToken";
import getAllGems from "../utils/helpers/getAllGems";
import getAllUsers from "../utils/helpers/getAllUsers";
import getCurrentUserId from "../utils/helpers/getCurrentUserId";

const Home = ({ isAuthenticated, gems, users }) => {
  return (
    <section className={styles.home}>
      {!isAuthenticated && <HomeHero />}
      {isAuthenticated && <Masonry gems={gems} users={users} />}
    </section>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const authToken = getAuthToken(context);
  const currentUserId = await getCurrentUserId(authToken);

  // If currentUserId is not found, then authToken will be considered as invalid by Firebase
  if (!currentUserId) {
    return {
      props: {
        isAuthenticated: false,
      },
    };
  }

  const gems = await getAllGems();
  const users = await getAllUsers();

  return {
    props: {
      isAuthenticated: true,
      gems,
      users,
    },
  };
}
