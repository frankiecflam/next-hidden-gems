import { databaseURL } from "../../firebase";
async function getUserData(userId) {
  const response = await fetch(`${databaseURL}/user.json`);

  if (!response.ok) return null;

  const data = await response.json();

  let loadedGemmers = [];
  let gemmerDbKey;

  for (const key in data) {
    loadedGemmers.push(data[key]);

    if (data[key].id === userId) {
      gemmerDbKey = key;
    }
  }

  const user = loadedGemmers.filter((gemmer) => gemmer.id === userId)[0];

  if (!user) return null;

  return {
    ...user,
    gemmerDbKey,
  };
}

export default getUserData;
