import { addStudentService, getStudentService } from "../service/student.service.js";
import { studentSchema } from "../validator/validation.js";

export async function manifestStudent(req, res) {
    try {
        const validation = studentSchema.safeParse(req.body);
        if (!validation.success) {
            return res.status(400).json({ error: validation.error.issues });
        }
        const addStudent = await addStudentService(validation.data);
        return res.status(201).json(addStudent);
    } catch (error) {
        return res.status(500).json({ error: "server error" });
    }
}

export async function resaveStudentById(req, res) {
    try {
        const { userId } = req.params;
        const catchStudent = await getStudentService(userId);
        if (!catchStudent) {
            return res.status(404).json({ message: "Not Found" });
        }
        return res.status(200).json(catchStudent);
    } catch (error) {
        return res.status(404).json({ message: "Not Found" });
    }
}
