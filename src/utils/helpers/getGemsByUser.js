async function getGemsByUser(id) {
  const response = await fetch(
    "https://react-hidden-gems-default-rtdb.europe-west1.firebasedatabase.app/gems.json"
  );

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
