import { students } from "./data.js";

export function getStudentByCallback(id, callback) {
    setTimeout(() => {
        const student = students.find(student => student.id === id)
        if (student) {
            callback(null, student)
        } else {
            callback("Student not found");
        }
    },1000)
}