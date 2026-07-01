import { studyTasks } from "./data.js"

export function getTaskById(id) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            const task = studyTasks.find(studyTask => studyTask.id === id)
            if (task) {
                resolve(task)
            }else {
                reject("Task not found")
            }
        },1000)
    })
}