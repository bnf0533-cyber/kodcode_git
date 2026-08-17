import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");
export const db = client.db("db");
export default client;

const collection = db.collection("items");
export async function getAllItems() {
    return await collection.find({}).toArray();
}

export async function createData(data = []) {
    return await collection.insertMany(data);
}
