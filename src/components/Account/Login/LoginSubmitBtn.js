import styles from "./LoginSubmitBtn.module.css";

import Button from "../../UI/Button";

const LoginSubmitBtn = ({ className }) => {
  return (
    <Button
      className={className ? `${styles.btn} ${className}` : styles.btn}
      type="submit"
    >
      log in
    </Button>
  );
};

export default LoginSubmitBtn;
