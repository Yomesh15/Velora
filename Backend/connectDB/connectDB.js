import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB Connected !");
    } catch (error) {
        console.log(error);
        console.log("MongoDB Failed to Connect !");        
    }
}

export default connectDB