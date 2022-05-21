import styles from "./SignupSubmitBtn.module.css";
import Button from "../../UI/Button";

const SignupSubmitBtn = ({ className }) => {
  return (
    <Button
      className={className ? `${styles.btn} ${className}` : styles.btn}
      type="submit"
    >
      sign up
    </Button>
  );
};

export default SignupSubmitBtn;
