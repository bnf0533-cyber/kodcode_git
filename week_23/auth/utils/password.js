import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export async function hashPassword(plainPassword) {
    return bcrypt.hash(plainPassword, SALT_ROUNDS);
}

export async function comparePassword(plainPassword, passwordHash) {
    return bcrypt.compare(plainPassword, passwordHash);
}
