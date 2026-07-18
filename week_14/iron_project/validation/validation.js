import z, { int, string } from "zod";

export const operatorSchema = z.object ({
    name : z.string(),
    rank: z.string()
})
