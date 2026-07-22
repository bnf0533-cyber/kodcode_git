import mongoose from "mongoose";
import dns from "dns"
dns.setServers(['1.1.1.1','8.8.8.8'])
try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("connected successfully!");
}catch (err) {
    console.log("filed connected!", err);
}
