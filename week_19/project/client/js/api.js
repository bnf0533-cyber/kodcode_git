const API_URL = "http://localhost:3000/api/tasks";

export async function getTasks() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function createTask(title) {
    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(title),
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function updateTask(id, completed) {
    try {
        const res = await fetch(API_URL + `/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(completed)
        });
        const data = await res.json()
        return data        
    } catch (error) {
        console.log(error);
    }
}


export async function deleteTask(id) {
    try {
        const res = await fetch(API_URL + `/${id}`,{
            method : "DELETE",
            headers : {"Content-Type" : "application/json"}
        })
        if(res.status === 204) return  {success: true, message: 'delete very well' }
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error);
    }
}
