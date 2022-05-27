async function getAllGems() {
  const response = await fetch(
    "https://react-hidden-gems-default-rtdb.europe-west1.firebasedatabase.app/gems.json"
  );

  const data = await response.json();

  let loadedGems = [];

  for (const key in data) {
    loadedGems.push(data[key]);
  }

  return loadedGems;
}

export default getAllGems;
