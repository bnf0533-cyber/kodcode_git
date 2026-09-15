export function createUserRecord({ email, passwordHash }) {
    return {
        email,
        passwordHash,
        createdAt: new Date().toISOString(),
    };
}

export function toPublicUser(user) {
    return {
        _id: user._id,
        email: user.email,
    };
}
