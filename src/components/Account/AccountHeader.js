import styles from "./AccountHeader.module.css";
import { CloseIcon } from "../../assets/icons/index";

const AccountHeader = ({ heading, onClick, textContent }) => {
  return (
    <header className={styles.header}>
      <CloseIcon className={styles.close} onClick={onClick} />
      <h1 className={styles.heading}>{heading}</h1>
      {textContent && <p className={styles.textContent}>{textContent}</p>}
    </header>
  );
};

export default AccountHeader;
