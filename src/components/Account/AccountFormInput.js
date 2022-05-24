import styles from "./AccountFormInput.module.css";
import Input from "../UI/Input";
import { CorrectIcon, IncorrectIcon } from "../../assets/icons";

const AccountFormInput = ({
  type,
  placeholder,
  onChange,
  value,
  required,
  validated,
  validity,
  invalidFeedback,
}) => {
  let classes = styles.accountInput;

  validated &&
    (classes = `${styles.accountInput} ${styles.validated} ${
      validity ? styles.correct : styles.incorrect
    }`);

  return (
    <div className={classes}>
      <Input
        className={styles.input}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
      <CorrectIcon className={styles.correctIcon} />
      <IncorrectIcon className={styles.incorrectIcon} />
      <p className={styles.invalidFeedback}>{invalidFeedback}</p>
    </div>
  );
};

export default AccountFormInput;
