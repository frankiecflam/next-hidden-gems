import styles from "./GemModal.module.css";
import GemContent from "./GemContent";
import findAuthorById from "../../utils/helpers/findAuthorById";
import Image from "next/image";
import React from "react";

const GemModalImage = React.forwardRef(({ image }, ref) => {
  return (
    <div ref={ref}>
      <Image
        className={styles.image}
        src={image}
        alt="gem post's image"
        height={960}
        width={640}
        layout="responsive"
      />
    </div>
  );
});

GemModalImage.displayName = "GemModalImage";

const GemModal = ({ item, users }) => {
  const author = findAuthorById(users, item.createdBy);

  return (
    <div className={styles.modal}>
      <GemModalImage image={item.image} />
      <GemContent item={item} author={author} />
    </div>
  );
};

export default GemModal;
