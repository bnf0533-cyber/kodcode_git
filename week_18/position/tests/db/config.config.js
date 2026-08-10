import { MongoClient } from "mongodb";

const uri = "mongodb://root:root@127.0.0.1:27018/";
const client = new MongoClient(uri);

export const connectDB = async () => {
    try {
        await client.connect();
        console.log("Connected successfully to MongoDB");
        return client;
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
};

export default client;
