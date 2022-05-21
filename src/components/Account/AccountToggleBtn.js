import styles from "./AccountToggleBtn.module.css";

import Button from "../UI/Button";

const AccountToggleBtn = ({ text, onToggleBtnClick }) => {
  return (
    <Button className={styles.btn} onClick={onToggleBtnClick}>
      {text}
    </Button>
  );
};

export default AccountToggleBtn;
