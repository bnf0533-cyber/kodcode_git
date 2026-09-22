import { verifyToken } from "../services/generateToken.js";

export async function getAllUsersMiddleware(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization)
        return res
            .status(401)
            .json({ message: "Unauthorized: No token provided" });
    const token = authorization.split("Bearer ")[1];
    if (!token)
        return res
            .status(401)
            .json({ message: "Unauthorized: No token provided" });
    try {
        const payload = await verifyToken(token);
        req.user = payload;
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
}
