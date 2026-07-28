import {
    registerStudentToSession,
    getSessionById,
} from "../repository/labSessionRepo.repo.js";
import {
    getStudentById,
    pushUserToRegister,
} from "../repository/studentRepo.repo.js";

export async function registerStudentToSessionService(sessionId, studentId) {
    const student = await getStudentById(studentId);
    if (!student) {
        throw new Error("student not found");
    }
    if (student.labSessionsIds && student.labSessionsIds.includes(sessionId)) {
        const currentSession = await getSessionById(sessionId);
        return { remainingSpots: currentSession.remainingSpots };
    }
    const sessionResult = await registerStudentToSession(sessionId);
    await pushUserToRegister(studentId, sessionId);
    return sessionResult;
}
export async function getSessionByIdService(sessionId) {
    return await getSessionById(sessionId);
}
