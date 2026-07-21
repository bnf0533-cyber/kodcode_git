import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const app = express();
app.use(express.json());
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
const posts = db.collection("posts");

app.post("/insertToMany", async (req, res) => {
    const insert = await posts.insertMany([
        {
            title: "hello",
            content: "from Nehoray",
            author: "som",
            published: true,
        },
        {
            title: "hello",
            content: "from moshe",
            author: "hey",
            published: false,
        },
        {
            title: "hello",
            content: "from nisim",
            author: "wow",
            published: false,
        },
    ]);
    console.log(insert);
    res.json(insert);
});

app.get("/post", async (req, res) => {
    const get = await posts.find({ published: true }).toArray();
    res.json(get);
});

app.post("/post", async (req, res) => {
    try {
        const { title, content, author, published } = req.body;
        const newPost = {
            title,
            content,
            author,
            published,
            created_at: new Date(),
        };
        const insert = await posts.insertOne(newPost);
        newPost._id = insert.insertedId;
        console.log(newPost);

        res.status(201).json(newPost);
    } catch (e) {
        console.log(e);
    }
});

app.get("/posts/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const get = await posts.findOne(new ObjectId(id));
        res.json(get);
    } catch (e) {
        console.log(e);
    }
});

app.delete("/posts/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const get = await posts.findOne(new ObjectId(id));
        res.json(get);
    } catch (e) {
        console.log(e);
    }
});

app.put("/posts/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, published } = req.body;
        const update = await posts.findOneAndUpdate(
            { _id: new ObjectId(id) },
            {
                $set: {
                    title,
                    content,
                    published,
                },
            },
            { returnDocument: "after" }
        );
        res.json(update);
    } catch (e) {
        res.status;
        console.log(e);
    }
});

app.listen(3000, () => {
    console.log("server running...");
});
