import popoutGemmerDbKey from "./popoutGemmerDbKey";
import updateGemmerData from "./updateGemmerData";

// Update Database
async function updateCollection(gemmer, collection, itemExisted, item) {
  let updatedGemmerData = popoutGemmerDbKey(gemmer);
  let updatedGemmerCollection = collection.map(
    (collectionItem) => collectionItem.id
  );

  if (itemExisted) {
    updatedGemmerCollection = updatedGemmerCollection.filter(
      (collectionId) => collectionId !== item.id
    );
  } else {
    updatedGemmerCollection = [...updatedGemmerCollection, item.id];
  }

  updatedGemmerData = {
    ...updatedGemmerData,
    collection: JSON.stringify(updatedGemmerCollection),
  };

  await updateGemmerData(updatedGemmerData, gemmer.gemmerDbKey);
}

export default updateCollection;
