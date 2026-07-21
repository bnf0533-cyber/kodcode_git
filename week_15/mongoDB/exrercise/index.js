import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(
    "mongodb://admin:secret@localhost:27017/blog?authSource=admin"
);

try {
    await client.connect();
    console.log("connected");
} catch {
    console.log("failed to connect");
}

const db = client.db("blog");
const player = db.collection("players");

// const insertPlayer = player.insertMany([
//     {
//         name: "Alice",
//         age: 28,
//         role: "admin",
//         score: 80,
//         tags: ["js"],
//         status: "active",
//     },

//     {
//         name: "David",
//         age: 16,
//         role: "viewer",
//         score: 20,
//         tags: [],
//         status: "active",
//     },

//     {
//         name: "Sarah",
//         age: 34,
//         role: "editor",
//         score: 95,
//         tags: ["js", "react"],
//         status: "active",
//     },

//     {
//         name: "Noa",
//         age: 22,
//         role: "viewer",
//         score: 40,
//         tags: ["css"],
//         status: "banned",
//     },
// ]);

// console.log(await player.find().toArray())
// const getByAge = await player.find({age : {$gt : 20}}).toArray()
// console.log(getByAge);

// const getAdminOrEditor = await player
//     .find({
//         role: { $in: ["admin", "editor"] },
//     })
//     .toArray();
// console.log(getAdminOrEditor);

// const sortByAgeAn AndStatus);

// const set = await player.findOneAndUpdate(
//     { name: "Alice" },
//     { $set: { city : "Tel Aviv" } },{returnDocument : "after"}
// );
// console.log(await set);

// const score = await player.findOneAndUpdate({name : "David"}, {$inc : {score : 10}},{returnDocument : "after"})
// console.log(await score);

// const tags = await player.findOneAndUpdate({name : "Sarah"}, {$push : {tags : "mongo"}},{returnDocument : "after"})
// console.log(await tags);

// const exists = await player.find({"tags.0" :{$exists : true} }).toArray()
// console.log(exists);
