import { getTasks, createTask, deleteTask } from "./api.js";

const form = document.getElementById("add-form");
const input = document.getElementById("title-input");
const list = document.getElementById("task-list");

async function getAllTasks() {
    try {
        const res = await getTasks();
        res.forEach((element) => {
            const li = document.createElement("li");
            // const input = document.createElement("input")
            // const span = document.createElement("span");
            // const button = document.createElement("button");


            li.textContent = element.title; 
            list.append(li);
            li.classList.add("task-item")
            const dbtn = document.createElement("checkBox");
            list.appendChild(dbtn);
            dbtn.classList.add("btn")
        });
    } catch (error) {
        console.error(error);
    }
}
getAllTasks();

async function addTask(e) {
    e.preventDefault();
    const takTask = input.value.trim();
    if (takTask === "") return;
    try {
        const res = await createTask({ title: takTask });
        const id = res._id || res.id;

        const li = document.createElement("li");
        li.textContent = takTask + " ";

        const dbtn = document.createElement("button");
        dbtn.textContent = "delete";

        dbtn.addEventListener("click", async () => {
            try {
                await deleteTask(id);
                li.remove();
            } catch (error) {
                console.error(error);
            }
        });
        li.appendChild(dbtn);
        list.appendChild(li);
    } catch (error) {
        console.error(error);
    }

    list.appendChild(li);
    input.value = "";
    input.focus();
}

form.addEventListener("submit", addTask);
