import styles from "./FollowBtn.module.css";
import Button from "../UI/Button";
// import updateGemmerData from "../../utils/helpers/updateGemmerData";
// import popoutGemmerDbKey from "../../utils/helpers/popoutGemmerDbKey";


const FollowBtn = ({ onFollowingChange, isFollowing }) => {
  return (
    <Button
      className={isFollowing ? styles.btnUnfollow : styles.btnFollow}
      onClick={onFollowingChange}
    >
      {isFollowing ? "unfollow" : "follow"}
    </Button>
  );
};

export default FollowBtn;
