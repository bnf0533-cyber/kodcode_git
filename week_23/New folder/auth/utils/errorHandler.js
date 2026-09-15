export class AppError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        this.name = "AppError";
    }
}

export function errorHandler(err, _req, res, _next) {
    const statusCode = err.statusCode || 500;
    const isProd = process.env.NODE_ENV === "production";
    if (!isProd) console.log(err);
    res.status(statusCode).json({
        success: false,
        message:
            statusCode === 500 && isProd ? "Something went wrong" : err.message,
    });
}
