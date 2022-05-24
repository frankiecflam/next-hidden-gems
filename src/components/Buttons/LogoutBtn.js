import styles from "./LogoutBtn.module.css";

import Button from "../UI/Button";

const LogoutBtn = ({ onClick }) => {
  return (
    <Button className={styles.btn} onClick={onClick}>
      log out
    </Button>
  );
};

export default LogoutBtn;
