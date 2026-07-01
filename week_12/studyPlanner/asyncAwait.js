import { getStudentByCallback } from "./callbacks.js"


export async function prepareReminder(studentId) {
    try {
        const student = await new Promise((resolve, reject) => {
            getStudentByCallback(studentId, (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
        if (!student.contactInfo) {
            return "cannot prepare reminder"
        } else {
            return "reminder for " + student.name + " time to study"
        }
    } catch (error) {
        return error
    }
}