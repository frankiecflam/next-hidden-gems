import styles from "./LoginBtn.module.css";
import { Fragment } from "react";

import Button from "../UI/Button";
import Account from "../Account/Account";

const LoginBtn = ({
  onClick,
  onModalClose,
  onToggleBtnClick,
  showLoginModal,
}) => {
  return (
    <Fragment>
      <Button className={styles.btn} onClick={onClick}>
        Log in
      </Button>
      {showLoginModal && (
        <Account
          loginModalActive={showLoginModal}
          onModalClose={onModalClose}
          onToggleBtnClick={onToggleBtnClick}
        />
      )}
    </Fragment>
  );
};

export default LoginBtn;
