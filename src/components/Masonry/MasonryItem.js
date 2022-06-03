import styles from "./MasonryItem.module.css";
import Gem from "../Gem/Gem";
import { useState, forwardRef } from "react";
import Image from "next/image";
import findAuthorById from "../../utils/helpers/findAuthorById";
import CollectionSaveIcon from "../Collection/CollectionSaveIcon";
import checkCollectionItemExisted from "../../utils/helpers/checkCollectionItemExisted";

const MasonryItemImage = forwardRef(({ image }, ref) => {
  return (
    <div ref={ref}>
      <Image
        src={image}
        width={320}
        height={480}
        className={styles.image}
        alt="gem post's image"
        layout="responsive"
      />
    </div>
  );
});

MasonryItemImage.displayName = "MasonryItemImage";

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
      <MasonryItemImage image={image} />
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
