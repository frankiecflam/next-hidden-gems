import styles from "./CollectionHeader.module.css";
import CollectionSort from "./CollectionSort";

const CollectionHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>
        Here are all the gems you have saved along the way...
      </h1>
      <CollectionSort />
    </header>
  );
};

export default CollectionHeader;
