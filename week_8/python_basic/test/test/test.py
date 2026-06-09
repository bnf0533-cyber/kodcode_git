import json
import logging
from fastapi import FastAPI, APIRouter, HTTPException

# ==============================================================================
# 1. לוגים (Logging) - הכל מתחיל ביומן המבצעי
# ==============================================================================
logger = logging.getLogger("my_app")
logger.setLevel(logging.INFO)
formatter = logging.Formatter("%(asctime)s | %(levelname)s | %(message)s")

# אם אומרים: "לשמור את הלוגים גם למסך וגם לקובץ" -> תעשה ככה:
console_handler = logging.StreamHandler()      # למסך
file_handler = logging.FileHandler("sys.log")  # לקובץ

console_handler.setFormatter(formatter)
file_handler.setFormatter(formatter)

logger.addHandler(console_handler)
logger.addHandler(file_handler)


# ==============================================================================
# 2. מחלקות וירושה (OOP) - איך הנתונים שלנו נראים
# ==============================================================================
# אם אומרים: "צור מחלקה" -> תעשה ככה:
class Soldier:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name
    
    # פונקציה שהופכת את האובייקט למילון (כדי שה-JSON יצליח לשמור אותו)
    def to_dict(self):
        return {"id_num": self.id_num, "name": self.name}

# אם אומרים: "לרשת ממחלקה" -> תעשה ככה (שם ההורה בסוגריים):
class Officer(Soldier):
    def __init__(self, id_num, name, rank):
        # אם אומרים: "לאתחל את ההורה" -> תעשה ככה:
        super().__init__(id_num, name) 
        self.rank = rank

    # אם אומרים: "לדרוס (Override) מתודה של ההורה" -> תעשה ככה (אותו שם בדיוק):
    def to_dict(self):
        return {"id_num": self.id_num, "name": self.name, "rank": self.rank}


# ==============================================================================
# 3. קבצים ו-JSON - הזיכרון לטווח ארוך
# ==============================================================================
FILE_NAME = "data.json"

# אם אומרים: "לקרוא נתונים מקובץ ולטפל במקרה שאין קובץ" -> תעשה ככה:
def load_data():
    try:
        with open(FILE_NAME, "r", encoding="utf-8") as f:
            return json.load(f)
    except FileNotFoundError:
        return {} # הקובץ חסר? מחזירים מילון ריק

# אם אומרים: "לשמור קובץ שיהיה קריא לבני אדם (אינדנטציה)" -> תעשה ככה:
def save_data(data):
    try:
        with open(FILE_NAME, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
    except Exception as e:
        # אם אומרים: "לתעד שגיאת מערכת חמורה" -> תעשה ככה:
        logger.error(f"Critical error saving file: {e}")


# ==============================================================================
# 4. נתיבים, שגיאות ו-CRUD (FastAPI) - הראוטר שמשתמש בהכל!
# ==============================================================================
# אם אומרים: "לבודד נתיבים / הפרדת רשויות" -> תעשה ככה:
router = APIRouter()

# אם אומרים: "קוד סטטוס ליצירה מוצלחת" -> תעשה ככה: status_code=201
@router.post("/soldiers/{id_num}", status_code=201) 
def create_soldier(id_num: str, body: dict):
    data = load_data()
    
    # אם אומרים: "המשאב כבר קיים במערכת / למנוע כפילות" -> תעשה ככה:
    if id_num in data:
        raise HTTPException(status_code=409, detail="Soldier already exists")
        
    # אם אומרים: "חסר שדה חובה בקלט של הלקוח" -> תעשה ככה:
    if "name" not in body:
        raise HTTPException(status_code=400, detail="Missing required field: name")
        
    # הכל קשור להכל: נשתמש ב-OOP שיצרנו קודם כדי לייצר אובייקט חייל חדש!
    new_soldier = Soldier(id_num, body["name"])
    
    # נהפוך את האובייקט למילון ונשמור בעזרת הפונקציה של ה-JSON!
    data[id_num] = new_soldier.to_dict()
    save_data(data)
    
    # אם אומרים: "לתעד פעולה שהצליחה" -> תעשה ככה:
    logger.info(f"Successfully created soldier {id_num}")
    
    return {"message": "Created", "soldier": data[id_num]}


@router.get("/soldiers/{id_num}")
def get_soldier(id_num: str):
    data = load_data()
    
    # אם אומרים: "המשאב המבוקש לא נמצא" -> תעשה ככה:
    if id_num not in data:
        # אם אומרים: "לתעד אזהרה או מצב חריג שלא הפיל את השרת" -> תעשה ככה:
        logger.warning(f"Failed GET request: Soldier {id_num} not found")
        raise HTTPException(status_code=404, detail="Not found") # זריקת שגיאה עוצרת הכל
        
    return data[id_num]


# ==============================================================================
# 5. חיבור הראוטר לשרת הראשי (במציאות זה בקובץ main.py נפרד)
# ==============================================================================
app = FastAPI()

# אם אומרים: "איך מחברים את הקובץ של הנתיבים (ראוטר) לשרת הראשי?" -> תעשה ככה:
app.include_router(router)