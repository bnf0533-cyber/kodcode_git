import { ObjectId } from "mongodb";
import { db } from "../db/db.js";

const COLLECTION = db.collection("users");

async function getAllUsers() {
    try {
        return await COLLECTION.find().toArray();
    } catch (e) {
        console.log(e);
    }
}

async function createUser(user) {
    try {
        const res = await COLLECTION.insertOne(user);
        return res.insertedId;
    } catch (e) {
        console.log(e);
    }
}

async function getById(_id) {
    try {
        return await COLLECTION.find({ _id: new ObjectId(_id) });
    } catch (e) {
        console.log(e);
    }
}

async function deleteUser(_id) {
    try {
        return await COLLECTION.deleteOne({ _id: new ObjectId(_id) });
    } catch (e) {
        console.log(e);
    }
}

async function updateUser(_id, newData) {
    try {
        return await COLLECTION.updateOne(
            { _id: new ObjectId(_id) },
            {
                $set: newData,
            }
        );
    } catch (e) {
        console.log(e);
    }
}

async function getAge(age) {
    try {
        return await COLLECTION.find({
            username: { $in: ["talya"] },
        }).toArray();
    } catch (e) {
        console.log(e);
    }
}
console.log(await getAge(26));
