import "./CategoryList.module.css";
import CategoryItem from "./CategoryItem";
import styles from "./CategoryList.module.css";
import { useState } from "react";

const DUMMY_DATA = ["all", "sports", "travel", "fashion", "scenery"];

const CategoryList = () => {
  const [categoryItemActive, setCategoryItemActive] = useState("all");

  const handleItemClick = (id) => {
    setCategoryItemActive(id);
  };

  return (
    <ul className={styles.list}>
      {DUMMY_DATA.map((cat) => {
        return (
          <CategoryItem
            onClick={handleItemClick}
            name={cat}
            isActive={cat === categoryItemActive}
            key={cat}
          />
        );
      })}
    </ul>
  );
};

export default CategoryList;
