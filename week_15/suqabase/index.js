import { client } from "./db/db.js";


export async function getAllUsers() {
    const {data , error} = await client.from("users").select();
    if (error) {
        return console.log(error);
    }
    return data
}

export async function createUser(userName) {
    const {data , error} = await client.from("users").insert({userName}).select().single()
    if (error) return console.log(error);
    return data
}

export async function deleteById(id) {
    const {data , error} = await client.from("users").delete().eq("id",id).select().single()
    if (error) return console.log(error);
    return data
}

export async function getById(id) {
    const {data , error} = await client.from("users").select().eq("id",id).select().single()
    if (error) return console.log(error);
    return data
}

export async function updateUser(id , newData) {
    const {data , error} = await client.from("users").update(newData).eq("id",id).select().single()
    if (error) return console.log(error);
    return data
}
    
