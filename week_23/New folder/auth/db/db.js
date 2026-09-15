import { MongoClient } from "mongodb";

const client = new MongoClient(
    process.env.MONGO_URL || "mongodb://localhost:27017"
);
export const db = client.db("auth-app");
try {
    await client.connect();
    console.log("DB connected");
} catch (e) {
    console.error(e);
    process.exit(1);
}
