from fastapi import FastAPI
from routers import notes
from routers import tasks
app = FastAPI()

app.include_router(notes.router ,tags=["notes"])
app.include_router(tasks.router,tags=["tasks"])