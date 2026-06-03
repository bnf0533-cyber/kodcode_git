# from fastapi import FastAPI , HTTPException
# from storage import save_data

# app = FastAPI()

# @app.post("/item")
# def creat_data(body : dict):
#     try:
#         save_data(body)
#     except Exception:
#         raise HTTPException(status_code=500, detail="storge error")
#     return {}