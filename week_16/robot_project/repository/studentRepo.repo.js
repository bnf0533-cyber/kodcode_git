import { ObjectId } from "mongodb";
import { client } from "../db/dbConfigMongo.db.js";

const db = client.db("robot_db");
const userCollection = db.collection("students");

export async function createStudent(body) {
    try {
        const newUser = {
            firstName: body.firstName,
            lastName: body.lastName,
            className: body.className,
            labSessionsIds: [],
        };
        const create = await userCollection.insertOne(newUser);
        return { id: create.insertedId.toString() };
    } catch (error) {
        throw error;
    }
}

export async function getStudentById(id) {
    try {
        const get = await userCollection.findOne({ _id: new ObjectId(id) });
        return get;
    } catch (error) {
        throw error;
    }
}

export async function pushUserToRegister(studentId, sessionId) {
    await userCollection.updateOne(
        { _id: new ObjectId(studentId) },
        { $addToSet: { labSessionsIds: sessionId } }
    );
}
