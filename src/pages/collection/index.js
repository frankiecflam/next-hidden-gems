import styles from "./index.module.css";
import CollectionHeader from "../../components/Collection/CollectionHeader";
import getAuthToken from "../../utils/helpers/getAuthToken";
import getUserIdByToken from "../../utils/helpers/getUserIdByToken";
import getUserData from "../../utils/helpers/getUserData";
import getGemsFromCollection from "../../utils/helpers/getGemsFromCollection";
import getAllUsers from "../../utils/helpers/getAllUsers";
import Masonry from "../../components/Masonry/Masonry";
import CollectionEmpty from "../../components/Collection/CollectionEmpty";
import getCategories from "../../utils/helpers/getCategories";
import { useState } from "react";

const Collection = ({ gemmer, collectionGems, users, categories }) => {
  const [sortingCriterion, setSortingCriterion] = useState("DATE");

  const handleSortingChange = (criterion) => {
    setSortingCriterion(criterion);
  };

  const emptyCollection = collectionGems.length === 0;
  return (
    <section className={styles.collection}>
      <CollectionHeader onSortChange={handleSortingChange} />
      {!emptyCollection && (
        <Masonry
          gems={collectionGems}
          users={users}
          gemmer={gemmer}
          sortingCriterion={sortingCriterion}
          categories={categories}
        />
      )}
      {emptyCollection && <CollectionEmpty />}
    </section>
  );
};

export default Collection;

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
  const gemmer = await getUserData(currentUserId);
  const users = await getAllUsers();
  const collectionGems = await getGemsFromCollection(currentUserId);
  const categories = await getCategories();

  return {
    props: {
      gemmer,
      collectionGems,
      users,
      categories,
    },
  };
}
