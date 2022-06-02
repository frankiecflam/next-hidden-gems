function checkCollectionItemExisted(collection, id) {
  // Collection argument must be an array containing gem objects
  if (!collection || collection.length === 0) return false;

  return collection.filter((item) => item.id === id).length > 0;
}

export default checkCollectionItemExisted;
