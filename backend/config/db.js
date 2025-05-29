import mongoose from "mongoose";

export  const  connectDB = async ()=>{
    try{
        await  mongoose.connect(process.env.MONGODB_URI).then((data)=>{
            console.log(`database connected with ${data.connection.host}`)
        })
    } catch {
        console.log("Error connecting database ")
        process.exit(1)
    }
}