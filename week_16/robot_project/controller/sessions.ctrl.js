import { getSessionById, registerStudentToSession } from "../repository/labSessionRepo.repo.js";
import { pushUserToRegister } from "../repository/studentRepo.repo.js";

export async function injectSession(req, res) {
    try {
        const { studentId } = req.body;
        const { sessionId } = req.params;
        const regisStudent = await registerStudentToSession(sessionId);
        await pushUserToRegister(studentId, sessionId);
        return res.status(201).json(regisStudent);
    } catch (error) {
        res.status(400).json({ error: error, remainingSpots: 0 });
    }
}

export async function showSession(req, res) {
    try {
        const { sessionId } = req.params;
        const getLabSessionById = await getSessionById(sessionId);
        if (!getLabSessionById) res.status(404).json("session not found");
        return res.status(200).json(getLabSessionById);
    } catch (error) {
        return res.status(404).json("session not found");
    }
}