import styles from "./GemmerInfo.module.css";
import { Fragment, useState } from "react";
import { defaultImage } from "../../assets/images";

import FollowBtn from "../Buttons/FollowBtn";
import EditBtn from "../Buttons/EditBtn";

const GemmerInfo = ({ gemmer, isSameUser, onEditClick, currentUser }) => {
  const { profileImage, username, gems, followers, bio } = gemmer;
  const [followersNum, setFollowersNum] = useState(
    JSON.parse(followers).length
  );

  const gemsNum = JSON.parse(gems).length;

  const handleFollowerUpdate = (action) => {
    action === "follow" && setFollowersNum((prevState) => prevState + 1);
    action === "unfollow" && setFollowersNum((prevState) => prevState - 1);
  };

  return (
    <Fragment>
      <img
        src={profileImage ? profileImage : defaultImage.src}
        className={profileImage ? styles.gemmerPicture : styles.defaultImage}
      />
      <div className={styles.gemmerInfo}>
        <div className={styles.flex}>
          <p className={styles.username}>{username}</p>
          {!isSameUser && (
            <FollowBtn
              gemmer={gemmer}
              currentUser={currentUser}
              onFollowingChange={handleFollowerUpdate}
            />
          )}
          {isSameUser && <EditBtn onClick={onEditClick} />}
        </div>
        <div className={styles.flex}>
          <p>
            <span className={styles.gemsNum}>{gemsNum}</span> gems
          </p>
          <p>
            <span className={styles.followersNum}>{followersNum}</span>{" "}
            followers
          </p>
        </div>
        <p className={styles.bio}>{bio}</p>
      </div>
    </Fragment>
  );
};

export default GemmerInfo;
