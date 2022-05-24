import styles from "./AccountFormFeedback.module.css";
import { Fragment } from "react";

const AccountFormFeedback = ({
  signupModalActive,
  loginModalActive,
  signupFormSubmitted,
  signupSucceeded,
  loginFormSubmitted,
  loginSucceeded,
}) => {
  let content;

  // Signup
  if (signupModalActive && signupFormSubmitted) {
    content = signupSucceeded ? (
      <h1 className={styles.heading}>
        Congratulations! Your account has been set up.
      </h1>
    ) : (
      <Fragment>
        <h1 className={styles.heading}>
          Whoops! Something went wrong with setting up your account.
        </h1>{" "}
        <p className={styles.description}>
          The email you used for the account setup has probably been used.
          Please try another one.
        </p>
      </Fragment>
    );
  }

  // Login
  if (loginModalActive && loginFormSubmitted) {
    content = !loginSucceeded ? (
      <h1 className={styles.heading}>
        Sorry! Your username or password is incorrect. Please try again.
      </h1>
    ) : (
      <h1 className={styles.heading}>You have successfully logged in.</h1>
    );
  }

  return <div className={styles.feedback}>{content}</div>;
};

export default AccountFormFeedback;
