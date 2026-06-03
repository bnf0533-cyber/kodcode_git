from fastapi import FastAPI , HTTPException
from logger_config import logger
from utils.io import read_info,write_info



app = FastAPI()

@app.get("/soldiers",status_code=200)
def get_soldiers():
    logger.info("get list of all soldiers.")
    return read_info()


@app.get("/soldiers/{id}",status_code=200)
def get_by_id(id : int):
    data =  read_info()
    for sol in data:
        if sol["id"] == id:
            logger.info(f"get details : {id}.")
            return sol
    else:
        logger.warning("serch by id not sseccest : soldier not found.")
        raise HTTPException(status_code=404, detail="Soldier not found")


@app.post("/soldiers",status_code=201)
def add_soldier(body : dict):
    data = list(read_info())
    data.append(body)
    write_info(data)
    logger.info(f"{body['id']} soldier added seccessfully.")

@app.put("/soldiers/{id}",status_code=200)
def updat(id :int,body :dict):
    data = list(read_info())
    for sol in data:
        if sol["id"] == id:
            sol.update(body)
            logger.info(f"The details of {id} have been changed successfully.")
            write_info(data)
            return {f"The soldier {id} was perfectly prepared."}
    else:
        raise HTTPException(status_code=404, detail="Soldier not found")

@app.delete("/soldiers/{id}",status_code=200)
def delete_soldier(id : int):
    data =  list(read_info())
    for sol in data:
        if sol["id"] == id:
            data.remove(sol)
            logger.info(f"Soldier {id} was successfully deleted from the system.")
            write_info(data)
            return(f"Soldier {id} was deleted from the system.")
    else:
        raise HTTPException(status_code=404, detail="Soldier not found")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app",host="127.0.0.1",port=8000,reload=True)