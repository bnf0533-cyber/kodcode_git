from fastapi import APIRouter , HTTPException
from models.item_model import ItemsCreate
from services.item_service import ItemService
from db import DBmanger
from repositories.item_repository import ItemRepository

db_manger = DBmanger()
repo = ItemRepository(db_manger)
serv = ItemService(repo)


router = APIRouter()

@router.post("/items")
def new_item(item : ItemsCreate):
    return serv.create_item(item)

@router.get("/items")
def get_all():
    return  serv.get_all_items()

@router.get("/items/{id}")
def get_by_id(id:int):
    res = serv.get_by_id(id)
    if not res:
        raise HTTPException(status_code=404, detail="Item not found")
    return res

@router.put("/items/{id}")
def update_item(id: int, item: ItemsCreate):
    return serv.update(id, item)

@router.delete("/items/{id}")
def delete_item(id: int):
    return serv.delete(id)

@router.get("/items/search")
def search_item(name: str):
    return serv.search(name)

@router.get("/items/category/{category}")
def get_by_category(category: str):
    return serv.get_by_category(category)