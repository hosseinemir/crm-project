import connectToDb from "@/utils/connectdb";
import User from "@/model/User";
export default async function handler(req, res) {
  await connectToDb();
  if (req.method === "POST") {
    const { name } = req.body;
    
    if (!name || name.length < 4) {
      res.status(422).json({ status: "failed", message: "invalid data" });
      return;
    }

    const user = await User.create({name});

    res
      .status(201)
      .json({ status: "success", message: "data created", data: { user } });
  }
}
