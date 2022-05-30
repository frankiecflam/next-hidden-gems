function checkCollectionItemExisted(collection, id) {
  // Parse collection
  let gemmerCollection = JSON.parse(collection);

  return gemmerCollection.filter((gemId) => gemId === id).length > 0;
}

export default checkCollectionItemExisted;
