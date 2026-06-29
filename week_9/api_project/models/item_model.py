from pydantic import BaseModel
from datetime import datetime



class ItemsCreate(BaseModel):
    name : str 
    description : str | None = None
    price : float
    category : str


class Item(ItemsCreate):
    is_active : bool = True
    created_at : datetime
    id : int



