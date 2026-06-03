import json
from fastapi import HTTPException
def read_info():
    try:
        with open("./soldiers.json" , "r") as jf:
            json_file = json.load(jf)
        return json_file
    except Exception: 
        raise HTTPException(status_code=500,detail="file not found")

def write_info(new_list):
    with open("./soldiers.json","w") as jf:
        json.dump(new_list,jf,indent=2)
        
