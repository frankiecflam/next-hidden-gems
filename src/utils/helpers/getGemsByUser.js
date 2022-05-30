import { databaseURL } from "../../firebase";

async function getGemsByUser(id) {
  const response = await fetch(`${databaseURL}/gems.json`);

  if (!response.ok) return [];

  const data = await response.json();

  let gems = [];

  for (const key in data) {
    if (data[key].createdBy === id) {
      gems.push(data[key]);
    }
  }

  return gems;
}

export default getGemsByUser;
