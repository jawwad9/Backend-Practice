import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URI,{
            dbName: "Crud"
        });
        console.log(`Mongo Db Connected ! ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Connection failed !",error);
    }
}
export default connectDB;