import styles from "./index.module.css";
import HomeHero from "../components/Home/HomeHero";
import Masonry from "../components/Masonry/Masonry";
import getAuthToken from "../utils/helpers/getAuthToken";
import getAllGems from "../utils/helpers/getAllGems";
import getAllUsers from "../utils/helpers/getAllUsers";
import getUserIdByToken from "../utils/helpers/getUserIdByToken";
import getUserData from "../utils/helpers/getUserData";
import { useState } from "react";
import getGemsFromCollection from "../utils/helpers/getGemsFromCollection";
import updateCollection from "../utils/helpers/updateCollection";

const Home = ({ isAuthenticated, gems, users, gemmer, collectionGems }) => {
  const [collection, setCollection] = useState(collectionGems);

  const handleCollectionChange = async (itemExisted, item) => {
    await updateCollection(gemmer, collection, itemExisted, item);

    if (itemExisted) {
      setCollection((prevState) =>
        prevState.filter((collectionItem) => collectionItem.id !== item.id)
      );
    } else {
      setCollection((prevState) => [...prevState, item]);
    }
  };

  return (
    <section className={styles.home}>
      {!isAuthenticated && <HomeHero />}
      {isAuthenticated && (
        <Masonry
          gems={gems}
          users={users}
          gemmer={gemmer}
          collection={collection}
          onCollectionChange={handleCollectionChange}
        />
      )}
    </section>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const authToken = getAuthToken(context);
  const currentUserId = await getUserIdByToken(authToken);

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
  const gemmer = await getUserData(currentUserId);
  const collectionGems = await getGemsFromCollection(currentUserId);

  return {
    props: {
      isAuthenticated: true,
      gems,
      collectionGems,
      users,
      gemmer,
    },
  };
}
