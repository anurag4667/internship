import mongoose from "mongoose";

const connectdb = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);
    
        console.log(`database connected to ${connect.connection.host}`);
    
    } catch (error) {
        console.log(error.message);
    }
}


export default connectdb;