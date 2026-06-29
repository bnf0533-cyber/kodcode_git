from models.item_model import ItemsCreate
from db import DBmanger
class ItemRepository:
    
    def __init__(self,db : DBmanger):
        self.db = db 
        self.db.is_connect()
    def insert(self,create_item : ItemsCreate):
        cursor = self.db.get_connection().cursor(dictionary=True)
        cursor.execute("insert into items (name, description, price, category) values (%s,%s,%s,%s)",(create_item.name,create_item.description,create_item.price,create_item.category))
        self.db.get_connection().commit()
        cursor.close()

    def get_all(self):
        cursor = self.db.get_connection().cursor(dictionary=True)
        cursor.execute("select * from items")
        res = cursor.fetchall()
        cursor.close()
        return res
    
    def get_by_id(self,id : int):
        cursor = self.db.get_connection().cursor(dictionary=True)
        cursor.execute("select * from items where id = %s",(id,))
        res = cursor.fetchone()
        cursor.close()
        return res
    
    def delete_by_id(self,id : int):
        cursor = self.db.get_connection().cursor(dictionary=True)
        cursor.execute("delete from items where id  = (%s)",(id,))
        self.db.get_connection().commit()
        cursor.close()
    
    def update(self,id : int , create_item : ItemsCreate):
        cursor = self.db.get_connection().cursor(dictionary=True)
        cursor.execute("update items set name = %s , description = %s, price = %s, category = %s where id = %s", (create_item.name,create_item.description,create_item.price,create_item.category, id))
        self.db.get_connection().commit()
        cursor.close()
    
    def search_by_name(self, search_name: str):
        cursor = self.db.get_connection().cursor(dictionary=True)
        name = f"%{search_name}%"
        cursor.execute("select * from items where name like %s", (name,))
        res = cursor.fetchall()
        cursor.close()
        return res

    def get_by_category(self, category: str):
        cursor = self.db.get_connection().cursor(dictionary=True)
        cursor.execute("select * from items where category = %s", (category,))
        res = cursor.fetchall()  # מביא את כל הפריטים באותה קטגוריה
        cursor.close()
        return res