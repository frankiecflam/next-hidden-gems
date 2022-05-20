import styles from "./CategoryItem.module.css";

const CategoryItem = ({ name, onClick, isActive }) => {
  const classes = isActive ? `${styles.item} ${styles.active}` : styles.item;

  return (
    <li className={classes} onClick={(e) => onClick(e.target.id)} id={name}>
      {name}
    </li>
  );
};

export default CategoryItem;
