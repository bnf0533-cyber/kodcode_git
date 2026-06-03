from fastapi import APIRouter

router = APIRouter()

@router.get("/hello/{name}")
def say_hello(name : str):
    return {"messag" : f"hello, {name}"}