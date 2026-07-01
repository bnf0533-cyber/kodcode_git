import { getStudentByCallback } from "./callbacks.js"
import { getTaskById } from "./promises.js"
import { prepareReminder } from "./asyncAwait.js"

console.log("--- Study Planner Started ---");

getStudentByCallback(1, (error, result) => {
    console.log("Student found " + result.name);
})
console.log("searching for student...");

getStudentByCallback(99, (error, result) => {
    if (error) {
        console.log("student not found");
    } else {
        console.log(result.name);
    }
})

let studyPlan = []
getTaskById(101)
    .then(task => {
        console.log("found task " + task.title);
        studyPlan.push(task)
        return getTaskById(102);
    })
    .then((task2) => {
        console.log("found task " + task2.title)
        studyPlan.push(task2)
        return getTaskById(103)
    })
    .then((task3) => {
        console.log("found task " + task3.title)
        studyPlan.push(task3)
        console.log("--- information ---");
        const total = studyPlan[0].estimatedTimeInMinutes + studyPlan[1].estimatedTimeInMinutes + studyPlan[2].estimatedTimeInMinutes
        console.log("total study time " + total + " minutes");
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("--- End ---");
    })

getTaskById(999)
    .catch((error) => {
        console.log("Task Error (expected): " + error);
    })

prepareReminder(1).then(message => console.log(message))
prepareReminder(2).then(message => console.log(message))
prepareReminder(99).then(message => console.log(message))
