import styles from "./CollectionHeader.module.css";
import CollectionSort from "./CollectionSort";

const CollectionHeader = ({ onSortChange }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>
        Here are all the gems you have saved along the way...
      </h1>
      <CollectionSort onSortChange={onSortChange} />
    </header>
  );
};

export default CollectionHeader;
