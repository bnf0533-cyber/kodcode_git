import bcrypt from 'bcrypt';

export async function hashPassword(pass) {
    const hash = bcrypt.hash(pass,10)
    return hash
}

export async function checkPass(pass , hash) {
    const com = bcrypt.compare(pass,hash)
    return com
}

export async function registerUser(userName , pass) {
    const hash = await hashPassword(pass)
    return {
        userName : userName,
        pass : hash
    }
}

export async function loginUser(pass , savedHash){
    const compare = await checkPass(pass,savedHash)
    if (!compare) {
        return "wrong pass"
    }
    return compare
}