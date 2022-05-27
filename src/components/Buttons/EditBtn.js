import styles from "./EditBtn.module.css";

import Button from "../UI/Button";

const EditBtn = ({onClick}) => {
  return <Button className={styles.btn} onClick={onClick}>edit</Button>;
};

export default EditBtn;
