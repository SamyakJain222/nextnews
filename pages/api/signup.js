import clientPromise from "../../lib/mongodb";
import { hashPass, comparePass } from "../../lib/hashingService";

export default async (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email.trim().toLowerCase();
    const password = req.body.password;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password || !emailRegex.test(email) || password.length === 0) {
      return res.status(400).send('Error');
    }

    try {
      const client = await clientPromise;
      const db = client.db("nextnews");
      const existingUser = await db.collection("users").findOne({ email });

      if (existingUser) {
        return res.status(409).send('Error');
      }

      const hashedPassword = await hashPass(password);
      const result = await db.collection("users").insertOne({ email, password: hashedPassword });
      return res.status(200).send('Success');
    } catch (e) {
      console.error(e);
      return res.status(500).send('Error');
    }
  }
  return res.status(405).send('Error');
};
