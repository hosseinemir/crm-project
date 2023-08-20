import Customer from "@/model/Customer";
import ConnectDB from "@/utils/ConnectDB";

export default async function handler(req, res) {
  try {
    await ConnectDB();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "failed", message: "faild in connect to db" });
    return;
  }
  if (req.method === "DELETE") {
    const id = req.query.customerId;
    try {
      await Customer.deleteOne({ _id: id });
      res.status(200).json({status:"success",message:"data deleted"})
    } catch (err) {
      console.log(err);
      res.status(400).json({ status: "failed", message: "faild in delete" });
      return;
    }
  }
}
