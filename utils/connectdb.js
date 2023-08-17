import mongoose from "mongoose";
export default async function connectToDb(){
try{
    if(mongoose.connections[0].readyState) return;
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connect to db")

}catch(err){
    console.log('connection failed')
}
}