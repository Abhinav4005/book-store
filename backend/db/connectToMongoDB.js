import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToMongoDB =async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connect with MongoDB");
    } catch (error) {
        console.log(error.message);
    }
}

export default connectToMongoDB;