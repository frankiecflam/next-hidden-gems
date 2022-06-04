import styles from "./IndexPage.module.css";
import { useState, Fragment } from "react";
import Head from "next/head";
import GemmerHeader from "../../../components/Gemmer/GemmerHeader";
import getAuthToken from "../../../utils/helpers/getAuthToken";
import getUserIdByToken from "../../../utils/helpers/getUserIdByToken";
import getUserData from "../../../utils/helpers/getUserData";
import getGemsByUser from "../../../utils/helpers/getGemsByUser";
import Masonry from "../../../components/Masonry/Masonry";
import getAllUsers from "../../../utils/helpers/getAllUsers";
import GemmerNotFound from "../../../components/Gemmer/GemmerNotFound";
import getGemsFromCollection from "../../../utils/helpers/getGemsFromCollection";
import updateCollection from "../../../utils/helpers/updateCollection";

const GemmerDetails = ({
  queryIdValid,
  queryId,
  currentUserId,
  gemmer,
  gemmerId,
  gems,
  users,
  currentUser,
  collectionGems,
}) => {
  const [collection, setCollection] = useState(collectionGems);

  if (!queryIdValid) {
    return (
      <Fragment>
        <Head>
          <title>Hidden Gems — Gemmer Profile</title>
          <meta
            name="description"
            content="Gemmer's information and hidden gems."
          />
        </Head>
        <section className={styles.gemmer}>
          <GemmerNotFound queryId={queryId} />
        </section>
      </Fragment>
    );
  }

  const isSameUser = gemmerId === currentUserId;

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
        <title>Hidden Gems — Gemmer Profile</title>
        <meta
          name="description"
          content="Gemmer's information and hidden gems."
        />
      </Head>
      <section className={styles.gemmer}>
        <GemmerHeader
          gemmer={gemmer}
          gemmers={users}
          isSameUser={isSameUser}
          currentUser={currentUser}
        />
        <Masonry
          gems={gems}
          users={users}
          gemmer={gemmer}
          collection={collection}
          onCollectionChange={handleCollectionChange}
        />
      </section>
    </Fragment>
  );
};

export default GemmerDetails;

export async function getServerSideProps(context) {
  const authToken = getAuthToken(context);
  const currentUserId = await getUserIdByToken(authToken);

  // Redirect if failed to authenticate
  // If currentUserId is not found, then authToken will be considered as invalid by Firebase
  if (!currentUserId) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const { id: gemmerId } = context.params;
  const gemmer = await getUserData(gemmerId);

  // if gemmer is not found with queryId, then gemmerId is incorrently provided in URL

  if (!gemmer) {
    return {
      props: {
        currentUserId,
        queryId: gemmerId,
        queryIdValid: false,
      },
    };
  }

  const gems = await getGemsByUser(gemmerId);
  const users = await getAllUsers();
  const currentUser = await getUserData(currentUserId);
  const collectionGems = await getGemsFromCollection(currentUserId);

  return {
    props: {
      queryIdValid: true,
      currentUserId,
      gemmerId,
      gemmer,
      gems,
      users,
      currentUser,
      collectionGems,
    },
  };
}
