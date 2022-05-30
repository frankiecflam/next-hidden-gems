import { idForCategoryAll } from "../constants/index";

function filterGemsByCategory(gems, categoryId = null) {
  // If null or categoryId = all, then no filter
  if (!categoryId || categoryId === idForCategoryAll) return gems;

  const filteredGems = gems.filter((gem) => gem.category === categoryId);
  return filteredGems;
}

export default filterGemsByCategory;
