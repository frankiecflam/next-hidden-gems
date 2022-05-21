import styles from "./LoginFormContent.module.css";
import { Fragment } from "react";

import LoginSubmitBtn from "./LoginSubmitBtn";

const LoginFormContent = () => {
  return (
    <Fragment>
      <input type="email" placeholder="Email" className={styles.input} />
      <input type="password" placeholder="Password" className={styles.input} />
      <LoginSubmitBtn className={styles.loginBtn} />
    </Fragment>
  );
};

export default LoginFormContent;
