import mongoose from "mongoose";

export default async function connectDB(){
    if(mongoose.connections[0].readyState){
        return;
    }
    try{
        await mongoose.connect(process.env.DB_URI)
    }catch(err){
        console.log(err)

    }
}