import styles from "./Input.module.css";

const Input = ({
  className,
  type,
  placeholder,
  onChange,
  value,
  required,
  autoComplete,
}) => {
  const classes = className ? `${styles.input} ${className}` : styles.input;

  return (
    <input
      className={classes}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      required={required}
      autoComplete={autoComplete}
    />
  );
};

export default Input;
