import "./CategoryList.module.css";
import CategoryItem from "./CategoryItem";
import styles from "./CategoryList.module.css";
import { useState } from "react";
import categoryIdForAll from "../../utils/constants/categoryIdForAll";

const CategoryList = ({ onCategoryChange, categories }) => {
  const [categoryItemActive, setCategoryItemActive] =
    useState(categoryIdForAll);

  const handleItemClick = (id) => {
    setCategoryItemActive(id);
    onCategoryChange(id);
  };

  return (
    <ul className={styles.list}>
      {categories.map((cat) => {
        return (
          <CategoryItem
            onClick={handleItemClick}
            name={cat.name}
            id={cat.id}
            isActive={cat.id === categoryItemActive}
            key={cat.id}
          />
        );
      })}
    </ul>
  );
};

export default CategoryList;
