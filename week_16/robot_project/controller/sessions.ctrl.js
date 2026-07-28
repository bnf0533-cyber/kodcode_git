import { registerStudentToSessionService, getSessionByIdService } from "../service/session.service.js";
import { sessionSchema } from "../validator/validation.js";

export async function injectSession(req, res) {
    try {
        const validation = sessionSchema.safeParse(req.body);
        if (!validation.success) {
            return res.status(400).json({ error: validation.error.issues, remainingSpots: 0 });
        }
        const { sessionId } = req.params;
        const regisStudent = await registerStudentToSessionService(sessionId, validation.data.studentId);
        return res.status(201).json(regisStudent);
    } catch (error) {
        return res.status(400).json({ error: error.message || error, remainingSpots: 0 });
    }
}
export async function showSession(req, res) {
    try {
        const { sessionId } = req.params;
        const sessionData = await getSessionByIdService(sessionId);
        if (!sessionData) {
            return res.status(404).json({ error: "session not found" });
        }
        return res.status(200).json(sessionData);
    } catch (error) {
        return res.status(404).json({ error: "session not found" });
    }
}