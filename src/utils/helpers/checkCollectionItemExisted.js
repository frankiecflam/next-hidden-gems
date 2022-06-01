function checkCollectionItemExisted(collection, id) {
  // Collection argument must be an array containing gem objects
  return collection.filter((item) => item.id === id).length > 0;
}

export default checkCollectionItemExisted;
