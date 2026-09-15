import { AppError } from "../utils/errorHandler.js";
import { comparePassword, hashPassword } from "../utils/password.js";
import { createUserDAL, findUserByEmailDAL } from "../DAL/user.dal.js";
import { generateToken } from "../utils/generateToken.js";

export async function createUser(req, res) {
    const { email, password } = req.body;
    const existsUser = await findUserByEmailDAL(email);
    if (existsUser) throw new AppError("User already exists", 409);
    const hashPass = await hashPassword(password);
    const nweUser = await createUserDAL({ email, passwordHash: hashPass });
    delete nweUser.passwordHash;
    res.status(201).json(nweUser);
}

export async function loginUser(req, res) {
    const { email, password } = req.body;
    const existsUser = await findUserByEmailDAL(email);
    if (!existsUser) throw new AppError("User not found", 404);
    const valid = await comparePassword(password, existsUser.passwordHash);
    if (!valid) throw new AppError("username/password not valid", 401);
    const token = generateToken(existsUser._id);
    res.json({ token, email: existsUser.email });
}

export async function getCurrentUser(req, res) {
    const existsUser = await findUserByEmailDAL(req.user.userId);
    if (!existsUser) throw new AppError("User not found", 404);
    delete existsUser.passwordHash;
    res.json(existsUser);
}
