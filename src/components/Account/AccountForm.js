import styles from "./AccountForm.module.css";

const AccountForm = ({ children, onSubmit }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default AccountForm;
