import { MongoClient } from "mongodb";
import "dotenv/config";

const client = new MongoClient(
    process.env.MONGO_URL || "mongodb://localhost:27017"
);
export const db = client.db("Authentication-Flow")
try {
    await client.connect();
    console.log("connection to mongodb successfully...!");
} catch (error) {
    console.error("failed to connect to mongodb", error);
    client.close(1);
    process.exit(1);
}


