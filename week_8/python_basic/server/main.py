from fastapi import FastAPI
import uvicorn
from datetime import datetime
app = FastAPI()

@app.get("/ping")
def read_root():
    return {"status" : "pong"}

@app.get("/greet/{name}")
def get_item(name: str):
    return {"message" : f"Hello, {name}!"}

@app.get("/users/admin")
def count_item():
    return{"count" : 10}

@app.get("/")
def return_dict():
    return{"service" : "my-api","version":"1.0"}

@app.get("/users/admin")
def manger():
    return{"role":"admin" , "access":"full"}

@app.get("/users/{user_id}")
def get_user_by_id(user_id):
    return{"user_id" : user_id , "name" : "nehoray", "email" : "google@gmail.com"}

@app.get("/calc/{a}/{op}/{b}")
def do_math(a:int,op:str,b:int):
    if op == "add":
        return{"operation" : op , "result" : a + b}
    elif op == "sub":
        return {"operation" : op , "result" : a - b}
    elif op == "mul":
        return{"operation" : op , "result" : a * b}
    elif op == "div":
        if b == 0:
            return{"error": "Cannot divide by zero"}
        return{"operation" : op , "result" : a / b}


@app.get("/status")
def get_time():
    return{"server_name" : "my fastapi server","time now is" : datetime.now()}


grades = {
    "1": {"name": "Moshe", "grade": 88},
    "2": {"name": "Yaakov", "grade": 75},
    "3": {"name": "David", "grade": 92}
}

@app.get("/students")
def get_syudent_grades():
    return grades

@app.get("/students/count")
def count_students():
    return {"total students" : len(grades)}

def get_top(student): 
    return student["grade"]

@app.get("/students/top")
def get_top_gread():
    return max(grades.values(),key=get_top)

@app.get("/students/average")
def get_average():
    all_grades = 0
    for gread in grades.values():
        all_grades += int(gread["grade"])
    return {"the average is" : all_grades / len(grades)}  

@app.get("/students/{student_id}")
def get_student_id(student_id):
    return grades[student_id]




if __name__ == "__main__":
    uvicorn.run(app="main:app", reload=True)
