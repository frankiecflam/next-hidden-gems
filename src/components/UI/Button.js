import styles from "./Button.module.css";

const Button = ({ className, children, type, onClick }) => {
  return (
    <button
      className={className ? `${styles.btn} ${className}` : styles.btn}
      type={type ? type : "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
