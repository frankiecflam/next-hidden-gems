function getCategoryNameById(categories, id) {
  if (!id) return null;

  const result = categories.filter((cat) => cat.id === id);
  return result[0].name;
}

export default getCategoryNameById;
