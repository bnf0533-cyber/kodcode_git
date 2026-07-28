import { createStudent, getStudentById } from "../repository/studentRepo.repo.js";

export async function manifestStudent(req,res) {
    try {
        const body = req.body;
        const addStudent = await createStudent(body);
        return res.status(201).json(addStudent);
    } catch (error) {
        return res.status(500).json("server error");
    }
}

export async function resaveStudentById(req,res) {
    try {
        const { userId } = req.params;
        const catchStudent = await getStudentById(userId);
        return res.status(200).json(catchStudent);
    } catch (error) {
        return res.status(404).json({ message: "Not Found" });
    }
}
