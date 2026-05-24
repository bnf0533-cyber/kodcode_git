import data
from utils import find_soldier_by_id , is_valid_name

def add_soldier(soldier_id : int , name : str) -> None:
    """
    מוסיפה חייל חדש למערכת.
    
    סוג: לוגיקה עסקית (Business Logic)
    
    מקבלת:
        soldier_id (int): מספר אישי של החייל
        name (str): שם החייל
    
    מחזירה:
        None - הפונקציה מוסיפה את החייל או זורקת exception
    
    זורקת:
        ValueError: אם id כבר קיים במערכת
        ValueError: אם name ריק או לא תקין

    למה הפונקציה קיימת:
    לוגיקה עסקית טהורה של הוספת חייל.
    מבצעת בדיקות תקינות ומוסיפה את החייל לנתונים.
    לא מטפלת בקלט/פלט - רק בלוגיקה.
    זורקת exceptions במקרה של שגיאה במקום להחזיר False.

    """    
    
    existing_soldier_by_id = find_soldier_by_id(soldier_id)
    existing_soldier_by_name = is_valid_name(name)
        
    if existing_soldier_by_id is not None:
        raise ValueError("id is exist.")
    if existing_soldier_by_name is False:
        raise ValueError("the name is not ligal")
    
    new_solider = {"id": soldier_id,
                    "name" : name,
                    "duties" : []
                    }
    data.soldiers_db.append(new_solider)

def remove_soldier(soldier_id : int) -> None:
    """
    מסירה חייל מהמערכת לפי id.
    
    סוג: לוגיקה עסקית (Business Logic)
    
    מקבלת:
        soldier_id (int): מספר אישי של החייל
    
    מחזירה:
        None - הפונקציה מסירה את החייל או זורקת exception
    
    זורקת:
        KeyError: אם חייל עם id זה לא נמצא במערכת
    
    למה הפונקציה קיימת:
    לוגיקה עסקית של הסרת חייל.
    מבצעת בדיקת קיום ומסירה מהנתונים.
    זורקת exception במקרה שהחייל לא קיים.

    """
    solider = find_soldier_by_id(soldier_id)
    if solider is None:
        raise KeyError("the id is not exist.")
    data.soldiers_db.remove(solider)

def get_all_soldiers() -> list:
    """
    מחזירה את רשימת כל החיילים במערכת.
    
    סוג: גישה לנתונים (Data Access)
    
    מקבלת: כלום
    
    מחזירה:
        list: רשימה של מילונים, כל מילון מייצג חייל
        רשימה ריקה אם אין חיילים
    
    זורקת: כלום - תמיד מחזירה רשימה (ריקה או מלאה)
    
    למה הפונקציה קיימת:
    גישה לנתונים בצורה מבוקרת.
    מאפשר לקבל את הנתונים מבלי לגשת ישירות למשתנה הגלובלי.
    """
    
    return data.soldiers_db