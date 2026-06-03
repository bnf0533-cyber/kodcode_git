from fastapi import APIRouter , HTTPException
router = APIRouter()

tasks = [
    {"id": "1", "text": "Fix the broken or condition before Gemini loses it", "end_date": "2026-06-04"},
    {"id": "2", "text": "Stop spelling end_date as and_date like an amateur", "end_date": "2026-06-05"},
    {"id": "3", "text": "Align task_id and taks_id because FastAPI is literally crying", "end_date": "2026-06-06"}
]


@router.get("/tasks")
def get_all_tasks():
    return tasks


@router.get("/tasks/{task_id}")
def get_task_by_id(task_id):
    for task in tasks:
        if task["id"] == task_id:
            return task
    else:
        raise HTTPException(status_code=404 , detail="task not found.")


@router.post("/tasks/{task_id}")
def add_task(body : dict , task_id : str):
    if "text" not in body or "end_date" not in body:
        raise HTTPException(status_code=400 , detail="the text need to be in your body message!.")
    for task in tasks:
        if task["id"] == task_id:
            raise HTTPException(status_code=409 , detail=f"the {task_id} all ready exist.")
    else:
        tasks.append({"id" : task_id , "text" : body["text"] , "end_date" : body["end_date"]})
        return f"the task successfully added!"

@router.put("/tasks/{task_id}")
def update_task_by_id(task_id : str , body : dict):
    if "text"  not in body or "end_date" not in body:
        raise HTTPException(status_code=400 , detail=f"the text need to be in your body message!.")
    for task in tasks:
        if task["id"] == task_id:
            task.update(body)
            return "your update finish"
    else:
        raise HTTPException(status_code=404 , detail=f"the {task_id} is not exist.")


@router.delete("/tasks/{task_id}")
def delete_task_by_id(task_id : str):
    for task in tasks:
        if task["id"] == task_id:
            tasks.remove(task)
            return {"delete" : task_id}
    else:
        raise HTTPException(status_code=404 , detail=f"the {task_id} is not exist.")