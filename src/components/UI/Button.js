import styles from "./Button.module.css";

const Button = ({ className, children, type }) => {
  return (
    <button
      className={className ? `${styles.btn} ${className}` : styles.btn}
      type={type ? type : "button"}
    >
      {children}
    </button>
  );
};

export default Button;
