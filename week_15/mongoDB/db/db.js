import { MongoClient, ObjectId } from "mongodb";
import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const client = new MongoClient(process.env.MONGO_URL, {
    tlsAllowInvalidCertificates: true
});
try {
    await client.connect();
    console.log("connected");
} catch (e) {
    console.log("failed to connect ", e);
    process.exit(1);
}

export const db = client.db("example")
export default client;
