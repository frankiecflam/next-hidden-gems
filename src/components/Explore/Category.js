import styles from "./Category.module.css";
import CategoryList from "./CategoryList";

const Category = ({ onCategoryChange, categories }) => {
  return (
    <div className={styles.category}>
      <h1 className={styles.heading}>Categories</h1>
      <CategoryList
        onCategoryChange={onCategoryChange}
        categories={categories}
      />
    </div>
  );
};

export default Category;
