import { databaseURL } from "../../firebase";
async function getAllCategories() {
  const response = await fetch(`${databaseURL}/category.json`);

  if (!response.ok) return [];

  const data = await response.json();

  let loadedCategories = [];
  for (const key in data) {
    loadedCategories.push(data[key]);
  }

  return loadedCategories;
}

export default getAllCategories;
