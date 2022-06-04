import styles from "./GemmerInfo.module.css";
import { Fragment, useState, forwardRef } from "react";
import defaultImage from "../../assets/images/defaultProfileImage.png";
import Image from "next/image";
import FollowBtn from "../Buttons/FollowBtn";
import EditBtn from "../Buttons/EditBtn";
import checkFollowing from "../../utils/helpers/checkFollowing";
import updateGemmerData from "../../utils/helpers/updateGemmerData";
import popoutGemmerDbKey from "../../utils/helpers/popoutGemmerDbKey";
import GemmerFollow from "./GemmerFollow";

const GemmerProfileImage = forwardRef(({ image, hasProfileImage }, ref) => {
  return (
    <div ref={ref} className={styles.imageContainer}>
      <Image
        className={hasProfileImage ? styles.gemmerPicture : styles.defaultImage}
        alt="gemmer's profile image"
        src={image}
        width={hasProfileImage ? 200 : 100}
        height={hasProfileImage ? 200 : 100}
      />
    </div>
  );
});

GemmerProfileImage.displayName = "GemmerProfileImage";

const GemmerInfo = ({
  gemmer,
  gemmers,
  isSameUser,
  onEditClick,
  currentUser,
}) => {
  const {
    profileImage,
    username,
    gems,
    followers,
    bio,
    id: gemmerId,
    following,
  } = gemmer;
  const [followersNum, setFollowersNum] = useState(
    JSON.parse(followers).length
  );
  const [isFollowing, setIsFollowing] = useState(
    checkFollowing(gemmerId, currentUser.following)
  );

  const [currentUserFollowing, setCurrentUserFollowing] = useState(
    JSON.parse(currentUser.following)
  );
  const [gemmerFollowers, setGemmerFollowers] = useState(JSON.parse(followers));

  const [showFollowerModal, setShowFollowerModal] = useState(false);
  const [showFollowingModal, setShowFollowingModal] = useState(false);

  const gemsNum = JSON.parse(gems).length;
  const followingNum = JSON.parse(following).length;

  const handleFollowerUpdate = async () => {
    let updatedGemmerData = popoutGemmerDbKey(gemmer);
    let updatedGemmerFollowers = gemmerFollowers;
    let updatedCurrentUserData = popoutGemmerDbKey(currentUser);
    let updatedCurrentUserFollowing = currentUserFollowing;

    if (isFollowing) {
      setFollowersNum((prevState) => --prevState);
      setCurrentUserFollowing((prevState) =>
        prevState.filter((id) => id !== gemmerId)
      );
      setGemmerFollowers((prevState) =>
        prevState.filter((id) => id !== currentUser.id)
      );

      updatedGemmerFollowers = updatedGemmerFollowers.filter(
        (id) => id !== currentUser.id
      );
      updatedCurrentUserFollowing = updatedCurrentUserFollowing.filter(
        (id) => id !== gemmerId
      );
    } else {
      setFollowersNum((prevState) => ++prevState);
      setCurrentUserFollowing((prevState) => [...prevState, gemmerId]);
      setGemmerFollowers((prevState) => [...prevState, currentUser.id]);
      updatedGemmerFollowers = [...updatedGemmerFollowers, currentUser.id];
      updatedCurrentUserFollowing = [...updatedCurrentUserFollowing, gemmerId];
    }

    updatedGemmerData = {
      ...updatedGemmerData,
      followers: JSON.stringify(updatedGemmerFollowers),
    };

    updatedCurrentUserData = {
      ...updatedCurrentUserData,
      following: JSON.stringify(updatedCurrentUserFollowing),
    };

    setIsFollowing((prevState) => !prevState);

    await updateGemmerData(updatedGemmerData, gemmer.gemmerDbKey);
    await updateGemmerData(updatedCurrentUserData, currentUser.gemmerDbKey);
  };

  const handleFollowerClick = () => {
    setShowFollowerModal((prevState) => !prevState);
  };

  const handleFollowingClick = () => {
    setShowFollowingModal((prevState) => !prevState);
  };

  return (
    <Fragment>
      <GemmerProfileImage
        image={profileImage ? profileImage : defaultImage.src}
        hasProfileImage={profileImage ? true : false}
      />
      <div className={styles.gemmerInfo}>
        <div className={styles.flex}>
          <p className={styles.username}>{username}</p>
          {!isSameUser && (
            <FollowBtn
              onFollowingChange={handleFollowerUpdate}
              isFollowing={isFollowing}
            />
          )}
          {isSameUser && <EditBtn onClick={onEditClick} />}
        </div>
        <div className={styles.flex}>
          <div>
            <p>
              <span className={styles.gemsNum}>{gemsNum}</span> gems
            </p>
          </div>
          <div className={styles.followers}>
            <p onClick={handleFollowerClick}>
              <span className={styles.followersNum}>{followersNum}</span>{" "}
              followers
            </p>
            {showFollowerModal && (
              <GemmerFollow
                onClick={handleFollowerClick}
                followers={gemmerFollowers}
                gemmers={gemmers}
              />
            )}
          </div>
          <div className={styles.following}>
            <p onClick={handleFollowingClick}>
              <span className={styles.followingNum}>{followingNum}</span>{" "}
              following
            </p>
            {showFollowingModal && (
              <GemmerFollow
                onClick={handleFollowingClick}
                following={following}
                gemmers={gemmers}
              />
            )}
          </div>
        </div>
        <p className={styles.bio}>{bio}</p>
      </div>
    </Fragment>
  );
};

export default GemmerInfo;
