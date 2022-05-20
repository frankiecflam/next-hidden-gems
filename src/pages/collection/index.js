import styles from "./index.module.css";
import CollectionHeader from "../../components/Collection/CollectionHeader";

const Collection = () => {
  return (
    <section className={styles.collection}>
      <CollectionHeader />
    </section>
  );
};

export default Collection;
