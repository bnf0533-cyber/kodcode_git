from fastapi import APIRouter , HTTPException

router = APIRouter()
import json

def load_data() -> dict:
    try:
        with open("data.json", "r") as file:
            data = json.load(file)
            return data
    except FileNotFoundError:
        return {}
    
        
def save_data(data : dict) -> None:
        with open("data.json", "w") as file:
            json.dump(data,file,ensure_ascii=False,indent=2)