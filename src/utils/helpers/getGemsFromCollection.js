import getUserData from "./getUserData";
import getAllGems from "./getAllGems";

async function getGemsFromCollection(userId) {
  // Get all gemsId from collection
  const gemmerData = await getUserData(userId);

  const collection = JSON.parse(gemmerData.collection);

  // If empty collection, then no matching is needed
  if (collection.length === 0) return [];

  // Get gems from Gems that are in the collection
  const allGems = await getAllGems();

  // Linear Search
  let collectionGems = [];
  for (const id of collection) {
    for (const gem of allGems) {
      if (id === gem.id) {
        collectionGems.push(gem);
      }
    }
  }

  return collectionGems;
}

export default getGemsFromCollection;
