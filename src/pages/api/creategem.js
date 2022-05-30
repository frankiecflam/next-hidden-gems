import { databaseURL } from "../../firebase";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const gemData = req.body;

    const response = await fetch(`${databaseURL}/gems.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gemData),
    });
    if (!response.ok) {
      res.status(400).json({ response });
    }

    res.status(200).json({ response });
  }
}
