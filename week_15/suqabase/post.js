import { client } from "./db/db.js";


async function getAllPosts() {
    const { data, error } = await client.from("posts").select();
    if (error) {
        return console.log(error);
    }
    return data
}

async function createPost(userName) {
    const { data, error } = await client.from("posts").insert({ userName }).select().single()
    if (error) return console.log(error);
    return data
}

async function deletePostById(id) {
    const { data, error } = await client.from("posts").delete().eq("id", id).select().single()
    if (error) return console.log(error);
    return data
}

async function getPostById(id) {
    const { data, error } = await client.from("posts").select().eq("id", id).select().single()
    if (error) return console.log(error);
    return data
}

async function updatePost(id, newData) {
    const { data, error } = await client.from("posts").update(newData).eq("id", id).select().single()
    if (error) return console.log(error);
    return data
}

export {
    createPost,
    deletePostById,
    getAllPosts,
    getPostById,
    updatePost
}