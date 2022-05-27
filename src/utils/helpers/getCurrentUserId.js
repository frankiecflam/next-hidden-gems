async function getCurrentUserId(idToken) {
  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.FIREBASE_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken,
      }),
    }
  );

  if (!response.ok) return null;

  const data = await response.json();
  const { localId: userId } = data.users[0];

  return userId;
}

export default getCurrentUserId;
