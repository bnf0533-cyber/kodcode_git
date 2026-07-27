/**
 * Create an Error with an HTTP status code.
 * Usage: throw createError(400, 'bad request')
 */
export function createError(status, message) {
    const err = new Error(message)
    err.status = status
    return err
}
