import styles from "./GemmerFollowModal.module.css";
import Image from "next/image";
import { forwardRef } from "react";
import defaultProfileImage from "../../assets/images/defaultProfileImage.png";
import Link from "next/link";

const GemmerProfilePicture = forwardRef(({ image, href }, ref) => {
  return (
    <a ref={ref} href={href}>
      <Image
        src={image}
        className={styles.profilePicture}
        alt="gemmer's profile picture"
        width={50}
        height={50}
      />
    </a>
  );
});

GemmerProfilePicture.displayName = "GemmerProfilePicture";

const GemmerFollowModal = ({ following, followers, gemmers }) => {
  let gemmersFollow = [];
  let gemmerFollowing = following ? JSON.parse(following) : null;

  for (const key in gemmers) {
    for (const id of gemmerFollowing || followers) {
      if (id === gemmers[key].id) {
        gemmersFollow.push(gemmers[key]);
      }
    }
  }

  const emptyGemmersFollow = gemmersFollow.length === 0;

  return (
    <div className={styles.modal}>
      <header>
        <h1 className={styles.heading}>
          {following ? "Following" : "Followers"}
        </h1>
      </header>
      {emptyGemmersFollow && (
        <div>
          <p className={styles.emptyMessage}>
            There are no users currently in{" "}
            {following ? "following" : "followers"}.
          </p>
        </div>
      )}
      {!emptyGemmersFollow && (
        <ul className={styles.list}>
          {gemmersFollow.map((gemmer) => {
            return (
              <li key={gemmer.id} className={styles.item}>
                <Link href={`/gemmer/${gemmer.id}`}>
                  <GemmerProfilePicture
                    image={gemmer.profileImage || defaultProfileImage}
                    href={`/gemmer/${gemmer.id}`}
                  />
                </Link>
                <Link href={`/gemmer/${gemmer.id}`}>
                  <p className={styles.username}>{gemmer.username}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default GemmerFollowModal;
