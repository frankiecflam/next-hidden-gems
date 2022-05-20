import styles from "./Category.module.css";
import CategoryList from "./CategoryList";

const Category = () => {
  return (
    <div className={styles.category}>
      <h1 className={styles.heading}>Categories</h1>
      <CategoryList />
    </div>
  );
};

export default Category;
