import jwt from "jsonwebtoken";
import "dotenv/config"

export async function createToken(userId) {
    return jwt.sign({userId} ,process.env.JWT_SECRET , {expiresIn : process.env.JWT_EXPIRES_IN})
}

export async function verifyToken(token) {
    return jwt.verify(token , process.env.JWT_SECRET)
}