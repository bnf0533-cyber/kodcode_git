from fastapi import FastAPI
from routers.item_router import router as item_router
app = FastAPI()


app.include_router(item_router)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)