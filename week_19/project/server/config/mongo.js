import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI || "mongodb://127.0.0.1:27017");
const db = client.db("task-manager");

export function getDb() {
  return db;
}
