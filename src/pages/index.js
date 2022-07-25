import styles from "./IndexPage.module.css";
import HomeHero from "../components/Home/HomeHero";
import Masonry from "../components/Masonry/Masonry";
import getAuthToken from "../utils/helpers/getAuthToken";
import getAllGems from "../utils/helpers/getAllGems";
import getAllUsers from "../utils/helpers/getAllUsers";
import getUserIdByToken from "../utils/helpers/getUserIdByToken";
import getUserData from "../utils/helpers/getUserData";
import { useState, Fragment, useEffect } from "react";
import Head from "next/head";
import getGemsFromCollection from "../utils/helpers/getGemsFromCollection";
import updateCollection from "../utils/helpers/updateCollection";

const Home = ({ isAuthenticated, gems, users, gemmer, collectionGems }) => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setCollection(collectionGems);
  }, [collectionGems]);

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
    <Fragment>
      <Head>
        <title>Hidden Gems — Home</title>
        <meta
          name="description"
          content="A social media platform where you discover hundreds of hidden gems from people all over the world."
        />
      </Head>
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
    </Fragment>
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
      currentUserId,
    },
  };
}
