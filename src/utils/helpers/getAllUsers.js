import { databaseURL } from "../../firebase";
async function getAllUsers() {
  const response = await fetch(`${databaseURL}/user.json`);

  const data = await response.json();

  return data;
}

export default getAllUsers;
