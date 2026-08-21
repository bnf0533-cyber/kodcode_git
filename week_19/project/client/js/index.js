import { getTasks } from "./api.js";

async function loadStats() {
    try {
        const data = await getTasks()
        return data
    } catch (error) {
        console.error(error);
    }
}
