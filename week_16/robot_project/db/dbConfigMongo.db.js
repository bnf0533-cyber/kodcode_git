import { MongoClient } from "mongodb";
import dotenv from "dotenv/config";
import dns from "dns"
dns.setServers(['1.1.1.1','8.8.8.8'])
export const client = new MongoClient(process.env.MONGO_URI)

try {
    await client.connect()
    console.log("database connection to mongodb successfully!");
} catch (error) {
    console.log("failed to connect to database" , error);
    
}
