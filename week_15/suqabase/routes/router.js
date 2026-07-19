import {
    getAllUsers,
    createUser,
    deleteById,
    getById,
    updateUser
} from "../index.js";
import {
    getAllPosts,
    createPost,
    deletePostById,
    getPostById,
    updatePost
} from "../post.js";

import express from "express"

const router = express.Router()

router.get("/users", async (req, res) => {
    const data = await getAllUsers();
    res.json(data);
});
router.get("/users/:id", async (req, res) => {
    const data = await getById(req.params.id);
    res.json(data);
});
router.post("/users", async (req, res) => {
    const data = await createUser(req.body.userName);
    res.json(data);
});
router.put("/users/:id", async (req, res) => {
    const data = await updateUser(req.params.id, req.body);
    res.json(data);
});
router.delete("/users/:id", async (req, res) => {
    const data = await deleteById(req.params.id);
    res.json(data);
});
router.get("/posts", async (req, res) => {
    const data = await getAllPosts();
    res.json(data);
});
router.get("/posts/:id", async (req, res) => {
    const data = await getPostById(req.params.id);
    res.json(data);
});
router.post("/posts", async (req, res) => {
    const data = await createPost(req.body.userName);
    res.json(data);
});
router.put("/posts/:id", async (req, res) => {
    const data = await updatePost(req.params.id, req.body);
    res.json(data);
});
router.delete("/posts/:id", async (req, res) => {
    const data = await deletePostById(req.params.id);
    res.json(data);
});
export default router;