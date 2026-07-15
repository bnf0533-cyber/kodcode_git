import {string, z} from "zod"

export const soldierSchema = z.object({
    name : z.string(),
    role : z.string(),
    unit : z.string(),
    age : z.number().int().positive(),
    status : z.string().optional()
})

export const statusSchema = z.object({
    status : z.string()
})