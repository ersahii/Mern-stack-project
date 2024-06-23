const mongoose = require("mongoose");
// const URI = "mongodb://127.0.0.1:27017/mern_admin";
// mongoose.connect(URI);
// mern_admin is database name 
const URI = process.env.MONGODB_URI;
const connectDb = async ()=>{
    try{
        await mongoose.connect(URI);
        console.log("Connected successfully to MongoDb");
    }
    catch(error){
        console.log(error)
        console.error("Database connection failed");
        process.exit(0);
    }
}
module.exports = connectDb;