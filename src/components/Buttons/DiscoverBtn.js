import styles from "./DiscoverBtn.module.css";

import Button from "../UI/Button";

const DiscoverBtn = ({className}) => {
  return <Button className={className ? `${styles.btn} ${className}` : styles.btn}>discover</Button>;
};

export default DiscoverBtn;
