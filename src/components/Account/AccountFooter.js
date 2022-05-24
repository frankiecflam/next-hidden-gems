import styles from "./AccountFooter.module.css";
import { Fragment } from "react";
import Link from "next/link";

import AccountToggleBtn from "./AccountToggleBtn";

const AccountFooter = ({
  onModalClose,
  loginModalActive,
  signupModalActive,
  loginSucceeded,
  signupSucceeded,
  onToggleBtnClick,
}) => {
  const toggleBtnText = !loginModalActive ? "log in" : "sign up";

  return (
    <footer className={styles.footer}>
      {!loginSucceeded && !signupSucceeded && (
        <Fragment>
          <div>
            <p>Or</p>
            {signupModalActive && <p>if you already have an account,</p>}
            {loginModalActive && <p>if you don't have an account,</p>}
          </div>
          <AccountToggleBtn
            text={toggleBtnText}
            onToggleBtnClick={onToggleBtnClick}
          />
        </Fragment>
      )}
      {loginSucceeded && (
        <Link href="/">
          <a className={styles.explore} onClick={onModalClose}>
            start exploring now
          </a>
        </Link>
      )}
      {signupSucceeded && (
        <AccountToggleBtn
          text={toggleBtnText}
          onToggleBtnClick={onToggleBtnClick}
        />
      )}
    </footer>
  );
};

export default AccountFooter;
