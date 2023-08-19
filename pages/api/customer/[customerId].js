import Customer from "@/model/Customer";
import connectDB from "../utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "failed", message: "faild in fetch" });
    return;
  }

  if (req.method === "GET") {
    const id = req.query.customerId;

    try {
        const customer = await Customer.findOne({_id:id})
        res.status(200).json({status:"success",data:customer})
    } catch (err) {
      console.log(err);
      res.status(400).json({ status: "failed", message: "faild in patch" });
      return;
    }
  }
}
