import styles from "./CollectionSort.module.css";

const CollectionSort = () => {
  const handleSelectChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className={styles.collectionSort}>
      <label htmlFor="criterion" className={styles.label}>
        sort by
      </label>
      <select
        className={styles.select}
        onChange={handleSelectChange}
        id="criterion"
      >
        <option className={styles.option} value={"newest"}>
          newest
        </option>
        <option className={styles.option} value={"category"}>
          category
        </option>
      </select>
    </div>
  );
};

export default CollectionSort;
