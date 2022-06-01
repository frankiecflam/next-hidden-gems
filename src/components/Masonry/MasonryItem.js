import styles from "./MasonryItem.module.css";
import Gem from "../Gem/Gem";
import { useState } from "react";
import findAuthorById from "../../utils/helpers/findAuthorById";
import CollectionSaveIcon from "../Collection/CollectionSaveIcon";
import checkCollectionItemExisted from "../../utils/helpers/checkCollectionItemExisted";

const MasonryItem = ({ item, users, onCollectionChange, collection }) => {
  const { image, id: itemId } = item;
  const author = findAuthorById(users, item.createdBy);
  const [showItemModal, setShowItemModal] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);
  const itemExisted = checkCollectionItemExisted(collection, itemId);

  const handleImageClick = () => {
    setShowItemModal((prevState) => !prevState);
  };

  const handleOverlayMouseEnter = () => {
    setOverlayActive(true);
  };

  const handleOverlayMouseOut = () => {
    setOverlayActive(false);
  };

  return (
    <div
      className={`${
        overlayActive ? `${styles.item} ${styles.active}` : styles.item
      }`}
    >
      <div
        className={styles.overlay}
        onClick={handleImageClick}
        onMouseEnter={handleOverlayMouseEnter}
        onMouseOut={handleOverlayMouseOut}
      />
      <img className={styles.image} src={image} />
      <p className={styles.author} onMouseEnter={handleOverlayMouseEnter}>
        @{author.username}
      </p>
      <CollectionSaveIcon
        className={styles.collectionIcon}
        itemExisted={itemExisted}
        item={item}
        onMouseEnter={handleOverlayMouseEnter}
        onCollectionChange={onCollectionChange}
      />
      {showItemModal && (
        <Gem item={item} users={users} onCloseModal={handleImageClick} />
      )}
    </div>
  );
};

export default MasonryItem;
