async function getAllUsers() {
  const response = await fetch(
    "https://react-hidden-gems-default-rtdb.europe-west1.firebasedatabase.app/user.json"
  );

  const data = await response.json();

  return data;
}

export default getAllUsers;
