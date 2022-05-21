import styles from "./AccountFooter.module.css";

import AccountToggleBtn from "./AccountToggleBtn";

const AccountFooter = ({
  loginModalActive,
  signupModalActive,
  onToggleBtnClick,
}) => {
  console.log(loginModalActive, signupModalActive);

  const toggleBtnText = !loginModalActive ? "log in" : "sign up";

  return (
    <footer className={styles.footer}>
      <div>
        <p>Or</p>
        {signupModalActive && <p>if you already have an account,</p>}
        {loginModalActive && <p>if you don't have an account,</p>}
      </div>
      <AccountToggleBtn
        text={toggleBtnText}
        onToggleBtnClick={onToggleBtnClick}
      />
    </footer>
  );
};

export default AccountFooter;
