import Customer from "@/model/Customer";
import ConnectDB from "@/utils/ConnectDB";

export default async function handler(req, res) {
  try {
    await ConnectDB();
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "failed", message: "faild in fetch" });
    return;
  }
  if (req.method === "POST") {
    const data = req.body.data;
    if (!data.name || !data.lastname || !data.email)
      return res
        .status(400)
        .json({ status: "failed", message: "invalid data" });

    try{

        const customer = await Customer.create(data);
        res.status(201).json({status:"success", message:"new customer add succecc", data:customer})
    }catch(err){
        console.log(err)
        res.status(500).json({status:"failed",message:"failed in catch data"})
    }    
  } else if (req.method === "GET") {
  }
}
