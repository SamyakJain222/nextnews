import clientPromise from "../../lib/mongodb";
import { hashPass, comparePass } from "../../lib/hashingService";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email.trim().toLowerCase();
    const password = req.body.password;
    try {
      // Hash password
      const hashedPassword = await hashPass(password);

      const client = await clientPromise;
      const db = client.db("nextnews");
      const user = await db.collection("users").findOne({ email });
      
      if (user && (await comparePass(password, user.password))) {
        return res.status(200).json((user._id.toString())).send('Success');
      } else {
        return res.status(401).send('Error');
      }
    } catch (e) {
      console.error(e);
      return res.status(500).send('Error');
    }
  }
  return res.status(405).send('Error');
}