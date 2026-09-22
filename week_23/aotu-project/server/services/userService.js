import { createUserDAL, getAllUsers, getUserBiEmail } from "../DAL/authDal.js";
import { createToken } from "./generateToken.js";
import { comparePassword, hashPassword } from "./hashService.js";

export async function createUserService({ username, email, password }) {
    if (!username || !email || !password) throw new Error("massing details");
    const exist = await getUserBiEmail(email);
    if (exist) throw new Error("user already exists");
    const hash = await hashPassword(password);
    await createUserDAL({ username, email, passwordHash: hash });
    return {
        username,
        email: email.toLowerCase(),
    };
}

export async function loginUserService({ email, password }) {
    if (!email || !password) throw new Error("massing details");
    const exist = await getUserBiEmail(email);
    if (!exist) throw new Error("user not found");
    const compare = await comparePassword(password, exist.passwordHash);
    if (!compare)
        throw new Error("email/password not correct. please try again!");
    const token = await createToken(exist._id.toString());
    return { token };
}

export async function getAllUsersService() {
    const users = await getAllUsers()
    if (!users || users.length === 0) throw new Error("users not found or empty please check your list");
    const cleanUsers = users.map((user) => {
        user = {id : user._id , name : user.username.toLowerCase() , email : user.email.toLowerCase()}
        return user
    })
    return cleanUsers
}