import styles from "./GemContent.module.css";
import GemContentHeader from "./GemContentHeader";
import GemContentBody from "./GemContentBody";

const GemContent = ({ item, author }) => {
  return (
    <div className={styles.content}>
      <GemContentHeader author={author} />
      <GemContentBody item={item} />
    </div>
  );
};

export default GemContent;
