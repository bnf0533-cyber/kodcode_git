from repositories.item_repository import ItemRepository
from models.item_model import ItemsCreate

class ItemService:
    def __init__(self,repository : ItemRepository):
        self.repository = repository

    def create_item(self,item : ItemsCreate):
        if item.price < 0:
            raise ValueError("price can't be negetive")
        return self.repository.insert(item)
    
    def get_all_items(self):
        return self.repository.get_all()
    
    def get_by_id(self,id : int):
        return self.repository.get_by_id(id)
    
    def delete(self,id):
        return self.repository.delete_by_id(id)
    
    def update(self, id :int  , item : ItemsCreate):
        if item.price < 0:
            raise ValueError("price can't be negetive")
        self.repository.update(id, item)

    def search(self,name : str):
        return self.repository.search_by_name(name)
    
    def get_by_category(self, category: str):
        return self.repository.get_by_category(category)