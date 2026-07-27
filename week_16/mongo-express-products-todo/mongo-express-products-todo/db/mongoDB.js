import { MongoClient, ObjectId, ReturnDocument } from 'mongodb'
import dns from "dns"


dns.setServers(["1.1.1.1","8.8.8.8"])
let client
let db

function getMongoUrl() {
    return process.env.MONGO_URL || 'mongodb://127.0.0.1:27017'
}

function getMongoDbName() {
    return process.env.MONGO_DB || 'shop'
}

export async function getConnectMongo() {
    if (db) return db

    const url = getMongoUrl()
    const dbName = getMongoDbName()

    client = new MongoClient(url)
    await client.connect()
    db = client.db(dbName)

    console.log(`MongoDB connected  ${dbName} (${url})`)
    return db
}

export async function closeMongo() {
    if (!client) return
    await client.close()
    client = undefined
    db = undefined
}

export function getMongoDB() {
    if (!db) throw new Error('MongoDB not connected. Call getConnectMongo() first.')
    return db
}

export async function createProduct(product) {

    // POST /products  productRouter  productService.createProduct  productRepo.create  here
    const database = getMongoDB()
    const result = await database.collection('products').insertOne(product)
    return { _id: result.insertedId, ...product }
}







export async function getAllProducts() {
    // TODO: return all documents from 'products' collection
    const database = getMongoDB()
    const result = await database.collection('products').find().toArray()
    return result
}

export async function getProductById(id) {
    // TODO: findOne by ObjectId(id)
    const database = getMongoDB()
    const result = await database.collection('products').findOne({_id: new ObjectId(id)})
    return result
}


export async function updateProduct(id, updates) {
    // TODO: findOneAndUpdate with $set, returnDocument: 'after'
    const database = getMongoDB()
    const result = await database.collection('products').findOneAndUpdate({_id : new ObjectId(id)},{$set : updates},{returnDocument: "after"} )
    return result
}

export async function deleteProduct(id) {
    // TODO: deleteOne by ObjectId(id), return the result
    const database = getMongoDB()
    const result = await database.collection('products').deleteOne({_id : new ObjectId(id)})
    return result
}

export async function getAllUsers() {
    // TODO: return all documents from 'users' collection
    const database = getMongoDB()
    const result = await database.collection('users').find().toArray()
    return result
}

export async function getUserById(id) {
    // TODO: findOne by ObjectId(id)
    const database = getMongoDB()
    const result = await database.collection('users').findOne({_id : new ObjectId(id)})
    return result
}

export async function createUser(user) {
    // TODO: insertOne and return { _id, ...user }
    const database = getMongoDB()
    const result = await database.collection('users').insertOne(user)
    return {_id : result.insertedId, ...user}
}

export async function updateUser(id, updates) {
    // TODO: findOneAndUpdate with $set, returnDocument: 'after'
    const database = getMongoDB()
    const result = await database.collection('users').findOneAndUpdate({_id : new ObjectId(id)}, {$set : updates} , {returnDocument : "after"})
    return result
}

export async function deleteUser(id) {
    // TODO: deleteOne by ObjectId(id), return the result
    const database = getMongoDB()
    const result = await database.collection('users').deleteOne({_id : new ObjectId(id)})
    return result
}

export async function getAllUserProducts() {
    // TODO: return all documents from 'userProducts' collection
    const database = getMongoDB()
    const result = await database.collection('userProducts').find().toArray()
    return result
}

export async function getUserProductById(id) {
    // TODO: findOne by ObjectId(id)
    const database = getMongoDB()
    const result = await database.collection('userProducts').findOne({_id : new ObjectId(id)})
    return result
}

export async function createUserProduct(userProduct) {
    // EXAMPLE: link userId + productId
    const database = getMongoDB()
    const result = await database.collection('userProducts').insertOne(userProduct)
    return { _id: result.insertedId, ...userProduct }
}

export async function updateUserProduct(id, updates) {
    // TODO: findOneAndUpdate with $set, returnDocument: 'after'
    const database = getMongoDB()
    const result = await database.collection('userProducts').findOneAndUpdate({_id : new ObjectId(id)}, {$set : updates}, {returnDocument : "after"})
    return result
}

export async function deleteUserProduct(id) {
    // TODO: deleteOne by ObjectId(id), return the result
    const database = getMongoDB()
    const result = await database.collection("userProducts").deleteOne({_id : new ObjectId(id)})
    return result
}

export { ObjectId }
