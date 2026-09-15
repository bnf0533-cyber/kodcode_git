import { z } from "zod";

export const createUserSchema = z.object({
    body: z.object({
        email: z.string().email("Email must be valid"),
        password: z.string().min(8, "Password must be at least 8 characters"),
    }),
});

export const loginUserSchema = z.object({
    body: z.object({
        email: z.string().email("Email must be valid"),
        password: z.string().min(1, "Password is required"),
    }),
});
