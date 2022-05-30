import styles from "./CollectionSaveIcon.module.css";
import { CollectionFilledIcon } from "../../assets/icons";
import { useRouter } from "next/router";
import popoutGemmerDbKey from "../../utils/helpers/popoutGemmerDbKey";
import updateGemmerData from "../../utils/helpers/updateGemmerData";

const CollectionSaveIcon = ({
  className,
  onMouseEnter,
  gemId,
  existed,
  gemmer,
  onExistenceChange,
}) => {
  const { collection, gemmerDbKey } = gemmer;
  const router = useRouter();

  const handleCollectionUpdate = async () => {
    let updatedCollection;
    let updatedGemmerObj = popoutGemmerDbKey(gemmer);

    // If existed, remove gemid from collection
    if (existed) {
      updatedCollection = JSON.parse(collection).filter((id) => id !== gemId);
    }
    // If not, then add
    else {
      updatedCollection = JSON.parse(collection);
      updatedCollection.push(gemId);
    }

    updatedGemmerObj = {
      ...updatedGemmerObj,
      collection: JSON.stringify(updatedCollection),
    };

    await updateGemmerData(updatedGemmerObj, gemmerDbKey);
    onExistenceChange();

    // Server-side props need to be regenerated immediately.
    router.reload();
  };

  const iconClasses = existed
    ? `${styles.icon} ${styles.existed}`
    : styles.icon;

  return (
    <div
      className={className}
      onClick={handleCollectionUpdate}
      onMouseEnter={onMouseEnter}
    >
      <CollectionFilledIcon className={iconClasses} />
    </div>
  );
};

export default CollectionSaveIcon;
