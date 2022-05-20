import styles from "./GemmerInfo.module.css";
import { Fragment } from "react";

import FollowBtn from "../Buttons/FollowBtn";
import EditBtn from "../Buttons/EditBtn";

const GemmerInfo = ({ gemmer }) => {
  const { image, username, gems, followers, bio } = gemmer;

  const gemsNum = gems.length;
  const followersNum = followers.length;
  return (
    <Fragment>
      <img src={image} className={styles.gemmerPicture} />
      <div className={styles.gemmerInfo}>
        <div className={styles.flex}>
          <p className={styles.username}>{username}</p>
          <FollowBtn />
          <EditBtn />
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
