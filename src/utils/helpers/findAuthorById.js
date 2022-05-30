export default function findAuthorById(users, id) {
  for (const key in users) {
    if (users[key].id === id) {
      return users[key];
    }
  }
}
