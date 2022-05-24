import styles from "./Input.module.css";

const Input = ({ className, type, placeholder, onChange, value, required }) => {
  const classes = className ? `${styles.input} ${className}` : styles.input;

  return (
    <input
      className={classes}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      required={required}
    />
  );
};

export default Input;
