import Customer from "@/model/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "failed", message: "faild in fetch" });
    return;
  }

  if (req.method === "PATCH") {
    const id = req.query.customerId;
    const data = req.body.data;
    try {
      const customer = await Customer.findOne({ _id: id });
      customer.name = data.name;
      customer.lastname = data.lastname;
      customer.email = data.email;
      customer.phone = data.phone;
      customer.address = data.address;
      customer.postalCode = data.postalCode;
      customer.date = data.date;
      customer.products = data.name;
      customer.updatedAt = Date.now();
      customer.save();
      res.status(200).json({ status: "success", message: "user updated" , data:customer });
    } catch (err) {
      console.log(err);
      res.status(400).json({ status: "failed", message: "faild in patch" });
      return;
    }
  }
}
