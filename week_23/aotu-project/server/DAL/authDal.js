import { db } from "../config/db.js";

const users = db.collection("users");

export async function createUserDAL({ username, email, passwordHash }) {
    const user = {
        username,
        email: email.toLowerCase(),
        passwordHash,
    };
    await users.insertOne(user);
    return user;
}

export async function getUserBiEmail(email) {
    const user = await users.findOne({email : email.toLowerCase()})
    return user
}

export async function getAllUsers() {
    const allUsers = await users.find().toArray()
    return allUsers
}