import mongoose from "mongoose";

const connectedDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}practice`);
        console.log(` MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
    }
}

export default connectedDb;