import { asyncWrapper } from "./asyncWrapper.js";
import { AppError } from "./errorHandler.js";
import { verifyToken } from "./generateToken.js";

export const authMiddleware = asyncWrapper(async (req, _res, next) => {
    const { authorization } = req.headers;
    if (!authorization) throw new AppError("miss requaierd headers", 401);
    const token = authorization.split("Bearer ")[1];
    if (!token) throw new AppError("username / password not correct", 401);
    const payload = verifyToken(token);
    req, user = payload
    next();
});
