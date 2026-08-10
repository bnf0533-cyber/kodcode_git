import { Db, MongoClient } from 'mongodb';

let /** @type {MongoClient} */ client, /** @type {Db} */ db;

export async function connectToMongo() {
    try {
        client = new MongoClient(process.env.MONGO_URI);
        await client.connect();
        console.log('Connected to Mongo...');
    } catch (error) {
        console.error('Could not connect to mongo');
        client = null;
        db = null;
    }
}

export async function getMongoDb() {
    return client.db('tests');
}
