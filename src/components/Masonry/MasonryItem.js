import styles from "./MasonryItem.module.css";
import Gem from "../Gem/Gem";
import { useState } from "react";

const MasonryItem = ({ item, users }) => {
  const { image } = item;

  const [showItemModal, setShowItemModal] = useState(false);

  const handleImageClick = () => {
    setShowItemModal((prevState) => !prevState);
  };

  return (
    <div className={styles.item}>
      <img className={styles.image} src={image} onClick={handleImageClick} />
      {showItemModal && (
        <Gem item={item} users={users} onCloseModal={handleImageClick} />
      )}
    </div>
  );
};

export default MasonryItem;
