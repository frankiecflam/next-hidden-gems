import { databaseURL } from "../../firebase";

async function getAllGems() {
  const response = await fetch(`${databaseURL}/gems.json`);

  const data = await response.json();

  let loadedGems = [];

  for (const key in data) {
    loadedGems.push(data[key]);
  }

  return loadedGems;
}

export default getAllGems;
