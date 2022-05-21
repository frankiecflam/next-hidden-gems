import styles from "./SignupBtn.module.css";
import { Fragment } from "react";

import Button from "../UI/Button";
import Account from "../Account/Account";

const SignupBtn = ({
  onClick,
  onModalClose,
  onToggleBtnClick,
  showSignupModal,
}) => {
  return (
    <Fragment>
      <Button className={styles.btn} onClick={onClick}>
        sign up
      </Button>
      <Account
        signupModalActive={showSignupModal}
        onModalClose={onModalClose}
        onToggleBtnClick={onToggleBtnClick}
      />
    </Fragment>
  );
};

export default SignupBtn;
