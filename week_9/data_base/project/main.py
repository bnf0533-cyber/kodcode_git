from fastapi import FastAPI , HTTPException
from datbase.ddl_opreations import *
import uvicorn

app = FastAPI()

@app.post("/tables/create")
def creat():
    try:
        create_database()
        create_students_table()
        create_courses_table()
        create_teachers_table()
        return {"success" : True , "message" : "all tables created successfully!"}
    except Exception as e:
        raise HTTPException(status_code=500 , detail=f"{e}")
        

@app.put("/students/add-phone-column")
def add_phone():
    try: 
        add_phone_column()
        return {"success" : True, "message" : "phone column added successfully!"}
    except Exception as e:
        raise HTTPException(status_code=500 , detail=f"{e}")


@app.delete("/tables")
def delete_all_tables():
    try:
        drop_all_tables()
        return {"success" : True , "message" : "all tables deleted successfully!"}
    except Exception as e:
        raise HTTPException(status_code=500 , detail=f"{e}")
    



if __name__ == "__main__":
    uvicorn.run("main:app",host="127.0.0.1",port=8000,reload=True)