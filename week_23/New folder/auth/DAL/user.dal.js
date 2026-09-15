import { ObjectId } from "mongodb";
import { db } from "../db/db.js";
import { createUserRecord } from "../models/user.model.js";

const users = db.collection("users");

export async function createUserDAL({ email, passwordHash }) {
    const user = {
        ...createUserRecord({ email: email.toLowerCase(), passwordHash }),
    };

    const { insertedId } = await users.insertOne(user);
    user._id = insertedId;
    return user;
}

export async function findUserByEmailDAL(email) {
    const normalizedEmail = email.toLowerCase();
    const currUser = await users.findOne({ email: normalizedEmail });
    return currUser;
}

export async function findUserByIdDAL(id) {
    const currUser = await users.findOne({ _id: new ObjectId(id) });
    return currUser;
}
