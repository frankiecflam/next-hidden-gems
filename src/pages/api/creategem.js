export default async function handler(req, res) {
  if (req.method === "POST") {
    const gemData = req.body;

    const response = await fetch(
      "https://react-hidden-gems-default-rtdb.europe-west1.firebasedatabase.app/gems.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gemData),
      }
    );
    if (!response.ok) {
      res.status(400).json({ response });
    }

    res.status(200).json({ response });
  }
}
