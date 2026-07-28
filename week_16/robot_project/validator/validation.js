import { z } from "zod";

export const studentSchema = z.object({
    firstName: z.string().min(1, "firstName is required"),
    lastName: z.string().min(1, "lastName is required"),
    className: z.string().min(1, "className is required"),
});

export const sessionSchema = z.object({
    studentId: z.string().min(1, "studentId is required"),
});
