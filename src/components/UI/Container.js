import styles from "./Container.module.css";

const Container = ({ children, className }) => {
  const classes = className
    ? `${className} ${styles.container}`
    : styles.container;

  return <div className={classes}>{children}</div>;
};

export default Container;
