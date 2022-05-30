import styles from "./GemmerInfo.module.css";
import { Fragment } from "react";

import FollowBtn from "../Buttons/FollowBtn";
import EditBtn from "../Buttons/EditBtn";

const GemmerInfo = ({ gemmer, isSameUser, onEditClick }) => {
  const { profileImage, username, gems, followers, bio } = gemmer;

  const gemsNum = JSON.parse(gems).length;
  const followersNum = JSON.parse(followers).length;
  return (
    <Fragment>
      <img
        src={
          profileImage
            ? profileImage
            : "https://randomuser.me/api/portraits/men/32.jpg"
        }
        className={styles.gemmerPicture}
      />
      <div className={styles.gemmerInfo}>
        <div className={styles.flex}>
          <p className={styles.username}>{username}</p>
          {!isSameUser && <FollowBtn />}
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
