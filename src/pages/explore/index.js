import styles from "./index.module.css";
import ExploreHeader from "../../components/Explore/ExploreHeader";
import getAuthToken from "../../utils/helpers/getAuthToken";
import getUserIdByToken from "../../utils/helpers/getUserIdByToken";
import getAllGems from "../../utils/helpers/getAllGems";
import getAllUsers from "../../utils/helpers/getAllUsers";
import Masonry from "../../components/Masonry/Masonry";
import filterGemsByCategory from "../../utils/helpers/filterGemsByCategory";
import { useState } from "react";
import getAllCategories from "../../utils/helpers/getCategories";
import getGemsBySearchTerm from "../../utils/helpers/getGemsBySearchTerm";
import getCategoryNameById from "../../utils/helpers/getCategoryNameById";
import getUserData from "../../utils/helpers/getUserData";

const Explore = ({ gems, users, categories, gemmer }) => {
  const [filterCategory, setFilterCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGems = filterGemsByCategory(gems, filterCategory);
  const searchedGems = searchTerm
    ? getGemsBySearchTerm(filteredGems, searchTerm)
    : filteredGems;

  const handleCategoryChange = (categoryId) => {
    setFilterCategory(categoryId);
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCategoryName = getCategoryNameById(categories, filterCategory);

  return (
    <section className={styles.explore}>
      <ExploreHeader
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchTermChange}
        searchTerm={searchTerm}
        categories={categories}
      />
      <Masonry
        gems={searchedGems}
        users={users}
        category={filteredCategoryName}
        searchTerm={searchTerm}
        gemmer={gemmer}
      />
    </section>
  );
};

export default Explore;

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

  const gems = await getAllGems();
  const users = await getAllUsers();
  const categories = await getAllCategories();
  const gemmer = await getUserData(currentUserId);

  return {
    props: {
      gems,
      gemmer,
      users,
      categories,
    },
  };
}
