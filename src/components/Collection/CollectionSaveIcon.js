import styles from "./CollectionSaveIcon.module.css";
import { CollectionFilledIcon } from "../../assets/icons";

const CollectionSaveIcon = ({
  className,
  item,
  onMouseEnter,
  itemExisted,
  onCollectionChange,
}) => {
  return (
    <div className={className} onMouseEnter={onMouseEnter}>
      <CollectionFilledIcon
        className={
          itemExisted ? `${styles.icon} ${styles.existed}` : styles.icon
        }
        onClick={() => onCollectionChange(itemExisted, item)}
      />
    </div>
  );
};

export default CollectionSaveIcon;
