import styles from "./AccountForm.module.css";

const AccountForm = ({ children }) => {
  return <form className={styles.form}>{children}</form>;
};

export default AccountForm;
