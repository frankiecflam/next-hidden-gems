import styles from "./SignupUnsuccess.module.css";

const SignupUnsuccess = () => {
  return (
    <div className={styles.signupUnsuccess}>
      <p className={styles.message}>
        Whoops! Something went wrong with setting up your account.
      </p>
      <p className={styles.feedback}>
        The email you used for the account setup has probably been used. Please
        try another one.
      </p>
    </div>
  );
};

export default SignupUnsuccess;
