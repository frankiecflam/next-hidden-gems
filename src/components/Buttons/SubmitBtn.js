import styles from "./SubmitBtn.module.css";

import Button from "../UI/Button";

const SubmitBtn = ({ className }) => {
  const classes = className ? `${styles.btn} ${className}` : styles.btn;
  return (
    <Button className={classes} type="submit">
      submit
    </Button>
  );
};

export default SubmitBtn;
