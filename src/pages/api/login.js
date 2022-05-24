export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          returnSecureToken: true,
        }),
      }
    );
    if (!response.ok) {
      res.status(400).json({ response });
    }

    const { idToken } = await response.json();

    res.status(200).json({ response, idToken });
  }
}
