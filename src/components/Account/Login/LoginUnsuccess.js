import styles from "./LoginUnsuccess.module.css";

const LoginUnsuccess = () => {
  return (
    <div className={styles.loginUnsuccess}>
      <p className={styles.message}>
        Sorry! Your username or password is incorrect. Please try again.
      </p>
    </div>
  );
};

export default LoginUnsuccess;
