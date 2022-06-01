import styles from "./Masonry.module.css";
import Masonry from "react-masonry-css";
import MasonryItem from "./MasonryItem";
import sortGems from "../../utils/helpers/sortGems";
import MasonryNotFound from "./MasonryNotFound";

const breakpointColumnsObj = {
  default: 4,
  992: 3,
  768: 2,
  576: 2,
};

//...

const Masonary = ({
  gems,
  users,
  category,
  searchTerm,
  gemmer,
  categories,
  collection,
  sortingCriterion,
  onCollectionChange,
}) => {
  // By default, sorted by Date
  const sortedGems = sortGems(gems, sortingCriterion, categories);

  // If no gems found under given criteria (category, search term),
  if (gems.length === 0 && (category || searchTerm))
    return <MasonryNotFound category={category} searchTerm={searchTerm} />;

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonaryGrid}
      columnClassName={styles.gridColumn}
    >
      {sortedGems.map((item) => {
        return (
          <MasonryItem
            key={item.id}
            item={item}
            users={users}
            collection={collection}
            onCollectionChange={onCollectionChange}
          />
        );
      })}
    </Masonry>
  );
};

export default Masonary;
