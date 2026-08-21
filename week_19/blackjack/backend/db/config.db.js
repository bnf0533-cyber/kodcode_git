import { MongoClient } from "mongodb";
import "dotenv/config";
export const client = new MongoClient(process.env.MONGO_URI || "mongodb://127.0.0.1:27017");

export async function createConnect() {
    try {
        await client.connect();
        console.log("mongo connect successfully...");
    } catch (error) {
        console.log("failed to connect", error);
        client.close(1)
    }
}


export const db = client.db("blackjack");
export const connectGame = db.collection("game")
export const connectPlayer = db.collection("player")