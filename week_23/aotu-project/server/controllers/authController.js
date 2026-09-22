import {
    createUserService,
    getAllUsersService,
    loginUserService,
} from "../services/userService.js";
import { UserSchema } from "../validation/authValid.js";
export async function createUserController(req, res) {
    try {
        UserSchema.parse(req.body)
        const user = await createUserService(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(409).json("bad request");
    }
}

export async function loginUserController(req, res) {
    try {
        const user = await loginUserService(req.body);
        res.status(200).json(user);
    } catch (error) {
        console.error(error.message);
        res.status(400).json("something wrong with login please try again!");
    }
}

export async function getAllUsersController(req , res) {
    try {
        const users = await getAllUsersService()
        res.status(200).json(users)
    } catch (error) {
        console.error(error.message);
        res.status(404).json("users not found")
    }
    
}