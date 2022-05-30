import styles from "./GemModal.module.css";
import GemContent from "./GemContent";
import findAuthorById from "../../utils/helpers/findAuthorById";

const GemModal = ({ item, users }) => {
  const author = findAuthorById(users, item.createdBy);

  return (
    <div className={styles.modal}>
      <img src={item.image} className={styles.image} />
      <GemContent item={item} author={author} />
    </div>
  );
};

export default GemModal;
