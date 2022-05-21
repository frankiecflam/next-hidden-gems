import styles from "./SignupFormContent.module.css";
import { Fragment } from "react";
import SignupSubmitBtn from "./SignupSubmitBtn";

const SignupFormContent = () => {
  return (
    <Fragment>
      <input type="text" placeholder="Username" className={styles.input} />
      <input type="email" placeholder="Email" className={styles.input} />
      <input type="password" placeholder="Password" className={styles.input} />
      <input
        type="password"
        placeholder="Confirm your password"
        className={styles.input}
      />
      <SignupSubmitBtn className={styles.signupBtn} />
    </Fragment>
  );
};

export default SignupFormContent;
