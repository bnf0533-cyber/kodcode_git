export function createUserRecord({name,email, password}) {
    return {
        name,
        email,
        createAt : new Date.now()
    }
}