import styles from "./AccountModal.module.css";

import AccountHeader from "./AccountHeader";
import AccountForm from "./AccountForm";
import AccountFooter from "./AccountFooter";
import LoginFormContent from "./Login/LoginFormContent";
import SignupFormContent from "./Signup/SignupFormContent";

const AccountModal = ({
  onModalClose,
  onToggleBtnClick,
  loginModalActive,
  signupModalActive,
}) => {
  const heading = loginModalActive ? "log in" : "sign up";
  const textContent =
    signupModalActive &&
    "sign up for discovering hidden gems from peope all over the world";

  return (
    <div className={styles.modal}>
      <AccountHeader
        onClick={onModalClose}
        heading={heading}
        textContent={textContent}
      />
      <AccountForm>
        {loginModalActive && <LoginFormContent />}
        {signupModalActive && <SignupFormContent />}
      </AccountForm>
      <AccountFooter
        loginModalActive={loginModalActive}
        signupModalActive={signupModalActive}
        onToggleBtnClick={onToggleBtnClick}
      />
    </div>
  );
};

export default AccountModal;
