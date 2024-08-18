import 'dotenv/config';
import mongoose from "mongoose";
const URI = process.env.MONGODB_URI;
const connectDb = async ()=>{
    try{
        await mongoose.connect(URI);
        console.log("Mongodb connected successfully");
    }
    catch(error){
        console.log(error)
        console.error("Database connection failed");
        process.exit(0);
    }
}
export default connectDb;