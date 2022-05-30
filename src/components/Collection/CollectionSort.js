import styles from "./CollectionSort.module.css";

const CollectionSort = ({ onSortChange }) => {
  return (
    <div className={styles.collectionSort}>
      <label htmlFor="criterion" className={styles.label}>
        sort by
      </label>
      <select
        className={styles.select}
        onChange={(e) => onSortChange(e.target.value)}
        id="criterion"
      >
        <option className={styles.option} value={"DATE"}>
          newest
        </option>
        <option className={styles.option} value={"CATEGORY"}>
          category
        </option>
      </select>
    </div>
  );
};

export default CollectionSort;
