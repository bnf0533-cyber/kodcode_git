import { ObjectId } from "mongodb";
import { getDb } from "../config/mongo.js";

function tasksCollection() {
  return getDb().collection("tasks");
}

export async function findTasks() {
  return tasksCollection().find().toArray();
}

export async function createTask(task) {
  const result = await tasksCollection().insertOne(task);
  return { _id: result.insertedId, ...task };
}

export async function updateTask(id, data) {
  return tasksCollection().findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: data },
    { returnDocument: "after" }
  );
}

export async function deleteTask(id) {
  const result = await tasksCollection().deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount;
}
