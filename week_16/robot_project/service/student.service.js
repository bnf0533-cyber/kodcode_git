import {
    createStudent,
    getStudentById,
} from "../repository/studentRepo.repo.js";

export async function addStudentService(body) {
    return await createStudent(body);
}

export async function getStudentService(id) {
    return await getStudentById(id);
}
