from data import soldiers_db
from utils import  find_soldier_by_id ,is_valid_day,soldier_has_duty ,is_valid_status ,find_duty_by_name
def add_duty_to_soldier(soldier_id: int, duty_name: str, day: str) -> None:
    """
    מוסיפה תורנות חדשה לחייל.
    
    סוג: לוגיקה עסקית (Business Logic)
    
    מקבלת:
        soldier_id (int): מספר אישי של החייל
        duty_name (str): שם התורנות
        day (str): יום בשבוע (sunday/monday/tuesday/wednesday/thursday)
    
    מחזירה:
        None - הפונקציה מוסיפה את התורנות או זורקת exception
    
    זורקת:
        KeyError: אם חייל עם id זה לא נמצא במערכת
        ValueError: אם תורנות עם שם זה כבר קיימת לחייל
        ValueError: אם day לא חוקי (friday/saturday או ערך לא תקין)
    
    למה הפונקציה קיימת:
    לוגיקה עסקית של הוספת תורנות.
    מבצעת בדיקות ומוסיפה תורנות לחייל.
    זורקת exceptions במקרה של שגיאה במקום להחזיר False.
    """
    exist_id = find_soldier_by_id(soldier_id)
    duty = soldier_has_duty(exist_id,duty_name)
    valid_day = is_valid_day(day)
    if exist_id is None:
        raise KeyError("id not found.")
    if valid_day is False:
        raise ValueError("day iligal.")
    if duty is True:
        raise ValueError("duty already exists.")

    new_duty = {"name": duty_name, "day": day, "status": "pending"}
    exist_id["duties"].append(new_duty)

def update_duty_status(soldier_id: int, duty_name: str, new_status: str) -> None:
    """
    מעדכנת את הסטטוס של תורנות.
    
    סוג: לוגיקה עסקית (Business Logic)
    
    מקבלת:
        soldier_id (int): מספר אישי של החייל
        duty_name (str): שם התורנות
        new_status (str): סטטוס חדש (pending/completed/missed)
    
    מחזירה:
        None - הפונקציה מעדכנת את הסטטוס או זורקת exception
    
    זורקת:
        KeyError: אם חייל עם id זה לא נמצא במערכת
        KeyError: אם תורנות עם שם זה לא נמצאה לחייל
        ValueError: אם new_status לא חוקי (לא pending/completed/missed)
    
    למה הפונקציה קיימת:
    לוגיקה עסקית של עדכון סטטוס.
    מבצעת בדיקות ומעדכנת את הסטטוס.
    זורקת exceptions במקרה של שגיאה במקום להחזיר False.
    """
    exist_id = find_soldier_by_id(soldier_id)
    duty = soldier_has_duty(exist_id,duty_name)
    status = is_valid_status(new_status)
    if exist_id is None:
        raise KeyError("id not found.")
    if duty is False:
        raise KeyError("duty not exists.")
    if status is False:
        raise ValueError("iligal status.")
    update_duty = find_duty_by_name(exist_id["duties"],duty_name)
    update_duty["status"] = new_status


def get_soldier_duties(soldier_id: int) -> list:
    """
    מחזירה את רשימת התורנויות של חייל.
    
    סוג: גישה לנתונים (Data Access)
    
    מקבלת:
        soldier_id (int): מספר אישי של החייל
    
    מחזירה:
        list: רשימת תורנויות (מילונים)
        רשימה ריקה אם אין תורנויות
    
    זורקת:
        KeyError: אם חייל עם id זה לא נמצא במערכת
    
    למה הפונקציה קיימת:
    גישה מבוקרת לתורנויות של חייל.
    מפרידה בין הנתונים לבין הגישה אליהם.
    זורקת exception אם החייל לא קיים (במקום להחזיר רשימה ריקה).
    """
    exist_id = find_soldier_by_id(soldier_id)
    if exist_id is None:
        raise KeyError("id not found.")
    return exist_id["duties"]
