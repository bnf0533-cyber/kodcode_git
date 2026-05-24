from data import soldiers_db
def find_soldier_by_id(soldier_id: int) -> dict | None:
    """
    מחפשת חייל לפי id ומחזירה אותו.
    
    סוג: פונקציית עזר (Helper Function)
    
    מקבלת:
        soldier_id (int): מספר אישי של החייל
    
    מחזירה:
        dict | None: מילון של החייל אם נמצא, None אם לא נמצא
    
    זורקת: כלום - מחזירה None במקרה שלא נמצא
    
    למה הפונקציה קיימת:
    פונקציה זו משמשת הרבה מקומות במערכת (DRY).
    במקום לחזור על לולאת חיפוש בכל פונקציה,
    יש פונקציה אחת שעושה את זה.
    מחזירה None במקום לזרוק exception - מאפשרת גמישות.
    """
    for soldier in soldiers_db:
        if soldier["id"] == soldier_id:
            return soldier
    return None

    


def find_duty_by_name(duties: list, duty_name: str) -> dict | None:
    """
    מחפשת תורנות לפי שם ברשימת תורנויות.
    
    סוג: פונקציית עזר (Helper Function)
    
    מקבלת:
        duties (list): רשימת תורנויות
        duty_name (str): שם התורנות לחיפוש
    
    מחזירה:
        dict | None: מילון של התורנות אם נמצאה, None אם לא נמצאה
    
    זורקת: כלום - מחזירה None במקרה שלא נמצא
    
    למה הפונקציה קיימת:
    פונקציה זו משמשת במספר מקומות (הוספת תורנות, עדכון סטטוס).
    הפרדה של לוגיקת החיפוש למקום אחד.
    מחזירה None במקום לזרוק exception - מאפשרת גמישות.
    """
    for duty in duties:
        if duty["name"] == duty_name:
            return  duty
    return None
    


def is_valid_status(status: str) -> bool:
    """
    בודקת אם סטטוס הוא חוקי.
    
    סוג: פונקציית validation (בדיקת תקינות)
    
    מקבלת:
        status (str): הסטטוס לבדיקה
    
    מחזירה:
        bool: True אם הסטטוס חוקי (pending/completed/missed)
            False אם לא חוקי
    
    זורקת: כלום - תמיד מחזירה bool
    
    למה הפונקציה קיימת:
    בדיקת תקינות של סטטוס משמשת במספר מקומות.
    במקום לחזור על הבדיקה, יש פונקציה אחת.
    גם מקל על שינוי הסטטוסים החוקיים בעתיד.
    פונקציות validation מחזירות bool ולא זורקות exceptions.
    """
    valid_status = ["pending","completed","missed"]
    if status in valid_status:
        return True
    else:
        return False


def is_valid_name(name: str) -> bool:
    """
    בודקת אם שם הוא תקין (לא ריק).
    
    סוג: פונקציית validation (בדיקת תקינות)
    
    מקבלת:
        name (str): השם לבדיקה
    
    מחזירה:
        bool: True אם השם תקין (לא ריק)
        False אם ריק
    
    זורקת: כלום - תמיד מחזירה bool
    
    למה הפונקציה קיימת:
    בדיקת תקינות של שם משמשת במספר מקומות.
    הפרדה של לוגיקת הבדיקה למקום אחד.
    בעתיד אפשר להוסיף בדיקות נוספות (אורך מינימלי, תווים חוקיים).
    פונקציות validation מחזירות bool ולא זורקות exceptions.
    """
    return name != ""
    


def soldier_has_duty(soldier: dict, duty_name: str) -> bool:
    """
    בודקת אם לחייל יש תורנות עם שם מסוים.
    
    סוג: פונקציית validation (בדיקת תקינות)
    
    מקבלת:
        soldier (dict): מילון של חייל
        duty_name (str): שם התורנות לבדיקה
    
    מחזירה:
        bool: True אם התורנות קיימת לחייל
            False אם לא קיימת
    
    זורקת: כלום - תמיד מחזירה bool
    
    למה הפונקציה קיימת:
    בדיקה זו משמשת בהוספת תורנות (למנוע כפילויות).
    הפרדה של הלוגיקה למקום אחד.
    פונקציות validation מחזירות bool ולא זורקות exceptions.
    """
    for duty in soldier["duties"]:
        if duty["name"] == duty_name:
            return True
        
    return False


def is_valid_day(day: str) -> bool:
    """
    בודקת אם יום הוא חוקי (לא שישי או שבת).
    
    סוג: פונקציית validation (בדיקת תקינות)
    
    מקבלת:
        day (str): היום לבדיקה
    
    מחזירה:
        bool: True אם היום חוקי (sunday-thursday)
        False אם לא חוקי או אסור (friday/saturday או ערך לא תקין)
    
    זורקת: כלום - תמיד מחזירה bool
    
    למה הפונקציה קיימת:
    בדיקת תקינות של יום משמשת בהוספת תורנות.
    הפרדה של לוגיקת הבדיקה למקום אחד.
    בעתיד אפשר לשנות את הימים החוקיים במקום אחד.
    פונקציות validation מחזירות bool ולא זורקות exceptions.
    """
    valid_days = ["sunday", "monday", "tuesday", "wednesday", "thursday"]
    if day in valid_days:
        return True
    else:
        return False
    
    
    