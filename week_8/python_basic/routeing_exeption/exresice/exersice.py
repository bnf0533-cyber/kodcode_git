from fastapi import  APIRouter , HTTPException

router = APIRouter()

@router.get("/number/{n}")
def check_positive(n : int):
    if n > 0 :
        return {"value" : n}
    else:
        raise HTTPException(status_code=400,detail= "Number must be non-negative")
    

students = {
    "101" : "moshe",
    "102" : "yosef"
    }

@router.get("/students/{student_id}")
def get_student(student_id : str):
    for student in students:
        if student == student_id:
            return students[student]
    else:
        raise HTTPException(status_code=404 , detail=f"the {student_id} not exist.")


@router.post("/students/{student_id}")
def add_student(body : dict, student_id : str):
    for student in students:
        if student == student_id:
            raise HTTPException(status_code=409 , detail=f"the {student_id} all redy exist.")
        elif "name" not in body:
            raise HTTPException(status_code=400,detail=f"name is not difeinde.")
    else:
        students[student_id] = body
        return students
    


