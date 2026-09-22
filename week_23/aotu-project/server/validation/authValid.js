import z, { email, maxLength, minLength } from "zod";

export const UserSchema = z.object({
    username : z.string(maxLength(30), minLength(5)),
    email : z.email("invalid email"),
    password : z.string(minLength(8), maxLength(20))
})
