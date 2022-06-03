import CollectionHeader from "../../components/Collection/CollectionHeader";
import getAuthToken from "../../utils/helpers/getAuthToken";
import getUserIdByToken from "../../utils/helpers/getUserIdByToken";
import getUserData from "../../utils/helpers/getUserData";
import getGemsFromCollection from "../../utils/helpers/getGemsFromCollection";
import getAllUsers from "../../utils/helpers/getAllUsers";
import Masonry from "../../components/Masonry/Masonry";
import CollectionEmpty from "../../components/Collection/CollectionEmpty";
import getCategories from "../../utils/helpers/getCategories";
import { useState, Fragment } from "react";
import updateCollection from "../../utils/helpers/updateCollection";
import Head from "next/head";

const Collection = ({ gemmer, gems, users, categories }) => {
  const [sortingCriterion, setSortingCriterion] = useState("DATE");
  // Collection should reflect instant changes without fetching data from DB. Initial state = gems
  const [collection, setCollection] = useState(gems);

  // Item must exist in collection so unncessary to consider inexisted case
  const handleCollectionChange = async (itemExisted, item) => {
    await updateCollection(gemmer, collection, itemExisted, item);

    setCollection((prevState) =>
      prevState.filter((collectionItem) => collectionItem.id !== item.id)
    );
  };

  const handleSortingChange = (criterion) => {
    setSortingCriterion(criterion);
  };

  const emptyCollection = collection.length === 0;

  return (
    <Fragment>
      <Head>
        <title>Hidden Gems — Collection</title>
        <meta
          name="description"
          content="Collection of all the hidden gems you have saved along."
        />
      </Head>
      <section>
        <CollectionHeader onSortChange={handleSortingChange} />
        {!emptyCollection && (
          <Masonry
            gems={collection}
            users={users}
            gemmer={gemmer}
            sortingCriterion={sortingCriterion}
            categories={categories}
            collection={collection}
            onCollectionChange={handleCollectionChange}
          />
        )}
        {emptyCollection && <CollectionEmpty />}
      </section>
    </Fragment>
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
  const gems = await getGemsFromCollection(currentUserId);
  const categories = await getCategories();

  return {
    props: {
      gemmer,
      gems,
      users,
      categories,
      currentUserId,
    },
  };
}
