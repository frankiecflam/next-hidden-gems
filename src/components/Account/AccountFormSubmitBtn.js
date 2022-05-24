import styles from "./AccountFormSubmitBtn.module.css";
import Button from "../UI/Button";

const AccountFormSubmitBtn = ({ text, className }) => {
  const classes = className ? `${styles.btn} ${className}` : styles.btn;

  return (
    <Button type="submit" className={classes}>
      {text}
    </Button>
  );
};

export default AccountFormSubmitBtn;
