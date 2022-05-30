import styles from "./CategoryItem.module.css";

const CategoryItem = ({ name, id, onClick, isActive }) => {
  const classes = isActive ? `${styles.item} ${styles.active}` : styles.item;

  return (
    <li className={classes} onClick={(e) => onClick(e.target.id)} id={id}>
      {name}
    </li>
  );
};

export default CategoryItem;
