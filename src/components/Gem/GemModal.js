import styles from "./GemModal.module.css";
import GemContent from "./GemContent";

function findAuthorById(users, id) {
  for (const key in users) {
    if (users[key].id === id) {
      return users[key];
    }
  }
}

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
