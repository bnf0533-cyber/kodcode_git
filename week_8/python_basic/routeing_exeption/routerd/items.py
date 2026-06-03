from fastapi import APIRouter

router = APIRouter(prefix="/items" , tags=["items"])

@router.get("/{item_id}")
def getALL(item_id):
    return{"messag" : {item_id}}