import styles from "./FollowBtn.module.css";
import Button from "../UI/Button";
import checkFollowing from "../../utils/helpers/checkFollowing";
import { Fragment, useState } from "react";
import updateGemmerData from "../../utils/helpers/updateGemmerData";
import popoutGemmerDbKey from "../../utils/helpers/popoutGemmerDbKey";

async function updateCurrentUserFollowing(
  currentUser,
  currentUserDbKey,
  gemmerId,
  isFollowing
) {
  let updatedCurrentUserData = popoutGemmerDbKey(currentUser);
  let updatedFollowing = JSON.parse(currentUser.following);

  if (!isFollowing) {
    updatedFollowing.push(gemmerId);
  } else {
    updatedFollowing = updatedFollowing.filter((id) => id !== gemmerId);
  }

  updatedCurrentUserData = {
    ...updatedCurrentUserData,
    following: JSON.stringify(updatedFollowing),
  };

  await updateGemmerData(updatedCurrentUserData, currentUserDbKey);
}

async function updateGemmerFollowers(
  gemmer,
  gemmerDbKey,
  currentUserId,
  isFollowing
) {
  let updatedGemmerData = popoutGemmerDbKey(gemmer);
  let updatedFollowers = JSON.parse(gemmer.followers);

  if (!isFollowing) {
    updatedFollowers.push(currentUserId);
  } else {
    updatedFollowers = updatedFollowers.filter((id) => id !== currentUserId);
  }

  updatedGemmerData = {
    ...updatedGemmerData,
    followers: JSON.stringify(updatedFollowers),
  };

  await updateGemmerData(updatedGemmerData, gemmerDbKey);
}

const FollowBtn = ({ gemmer, currentUser, onFollowingChange }) => {
  const { id: gemmerId, gemmerDbKey } = gemmer;
  const {
    following: currentUserFollowing,
    gemmerDbKey: currentUserDbKey,
    id: currentUserId,
  } = currentUser;
  const [isFollowing, setIsFollowing] = useState(
    checkFollowing(gemmerId, currentUserFollowing)
  );

  const handleFollowingUpdate = async () => {
    await updateCurrentUserFollowing(
      currentUser,
      currentUserDbKey,
      gemmerId,
      isFollowing
    );

    await updateGemmerFollowers(
      gemmer,
      gemmerDbKey,
      currentUserId,
      isFollowing
    );
    onFollowingChange(!isFollowing ? "follow" : "unfollow");
    setIsFollowing(!isFollowing);
  };

  return (
    <Fragment>
      <Button
        className={isFollowing ? styles.btnUnfollow : styles.btnFollow}
        onClick={handleFollowingUpdate}
      >
        {isFollowing ? "unfollow" : "follow"}
      </Button>
    </Fragment>
  );
};

export default FollowBtn;
