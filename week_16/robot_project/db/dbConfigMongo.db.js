import { MongoClient } from "mongodb";
import dotenv from "dotenv/config";

const client = new MongoClient(process.env.MONGO_URI)

try {
    await client
    console.log("database connection to mongodb successfully!");
} catch (error) {
    console.log("failed to connect to database" , error);
    
}
