import styles from "./MasonryNotFound.module.css";

const MasonryNotFound = ({ searchTerm, category }) => {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.heading}>
        Whoops! There are no items currently matching the following criteria:
      </h1>
      <ul className={styles.criteriaList}>
        {category && (
          <li className={styles.criteriaItem}>Category: {category}</li>
        )}
        {searchTerm && (
          <li className={styles.criteriaItem}>Search Term: {searchTerm}</li>
        )}
      </ul>
    </div>
  );
};

export default MasonryNotFound;
