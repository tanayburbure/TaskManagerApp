import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Mongo DB connected successfully");
    }catch(err){
        console.log("connection failed",err.message);
        process.exit(1);
    }
};

export default connectDB;