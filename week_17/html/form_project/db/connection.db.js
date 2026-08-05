import { MongoClient } from "mongodb";
import dns from "dns"
dns.setServers(['1.1.1.1','8.8.8.8'])
const claient = new MongoClient("mongodb+srv://bnf0533_db_user:rQr2C7AY1AHKeuQ5@cluster0.3s1o2uo.mongodb.net/")
try {
    await claient.connect()
    console.log("connection successfully");
} catch (error) {
    console.log("filed to connect" , error);
    await claient.close()
}

export const connection = await claient.db('formManager')