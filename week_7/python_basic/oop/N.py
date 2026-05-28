
import logging

# --- Logging ---
logging.basicConfig(level=logging.INFO, format="%(asctime)s | %(levelname)s | %(message)s")

# --- Classes, Objects, __init__, Attributes ---
class Parent:
    def __init__(self, name):
        self.name = name

    def action(self):
        return "Parent action"

# --- Inheritance, super(), Override ---
class Child(Parent):
    def __init__(self, name, age):
        super().__init__(name)
        self.age = age

    def action(self):
        return f"Child action: {self.name}, {self.age}"

# --- Polymorphism ---
objects_list = [Parent("Dan"), Child("Sara", 25)]

for obj in objects_list:
    logging.info(obj.action())

# --- type(), isinstance(), issubclass() ---
print(type(objects_list[1]) == Child)       
print(isinstance(objects_list[1], Parent))  
print(issubclass(Child, Parent))            

# --- Files ("w", "a", "r") & Line-by-Line Processing ---
with open("exam_data.txt", "w", encoding="utf-8") as f:
    f.write("Dan,85\n")

with open("exam_data.txt", "a", encoding="utf-8") as f:
    f.write("Sara,95\n")

with open("exam_data.txt", "r", encoding="utf-8") as f:
    for line in f:
        data = line.strip().split(',')
        if int(data[1]) > 90:
            logging.warning(f"Excellent score: {data[0]}")













# ==========================================
# 1. מחלקות וירושה (OOP & Polymorphism)
# ==========================================

# אם מבקשים "ליצור מחלקה" עם נתונים:
# תעשה: תגדיר __init__ ותשמור את המשתנים עם self
class Employee:
    def __init__(self, name, id_num):
        self.name = name
        self.id_num = id_num

    def do_work(self):
        return f"{self.name} is working."

# אם מבקשים "תכונה של המחלקה" (Class Attribute) לעומת תכונה של האובייקט:
# תעשה: תגדיר משתנה מחוץ ל-__init__ (ממש מתחת לשם המחלקה)
class Company:
    company_name = "TechCorp" # זהה לכל העובדים
    
    def __init__(self, emp_name):
        self.emp_name = emp_name # שונה מעובד לעובד

# אם מבקשים "לרשת ממחלקה" (מחלקת בן) ולאתחל את ההורה:
# תעשה: שים את ההורה בסוגריים, ותקרא ל-super().__init__ דבר ראשון
class Manager(Employee):
    def __init__(self, name, id_num, department):
        super().__init__(name, id_num) # מעביר להורה את מה שהוא צריך
        self.department = department   # משתנה ייחודי לבן

    # אם מבקשים "לדרוס" (Override) פעולה של ההורה:
    # תעשה: פשוט תכתוב את הפעולה שוב עם בדיוק אותו שם
    def do_work(self):
        return f"{self.name} is managing the {self.department} department."

# אם מבקשים להפעיל פעולה על רשימה של אובייקטים מסוגים שונים (פולימורפיזם):
# תעשה: אל תבדוק סוגים! פשוט תריץ לולאה ותקרא לפעולה. פייתון כבר תדע איזה להפעיל.
workers = [Employee("Dan", 111), Manager("Sara", 222, "HR")]
for worker in workers:
    print(worker.do_work()) 
    # דן יפעיל את עבודת הרגילה, שרה תפעיל את הניהול


# ==========================================
# 2. בדיקות טיפוסים (Type Checking)
# ==========================================

# אם מבקשים לבדוק אם אובייקט הוא *בדיוק* מסוג מסוים (ללא יורשים):
# תעשה: שימוש ב-type
if type(workers[0]) == Employee:
    print("Dan is exactly an Employee.")

# אם מבקשים לבדוק אם אובייקט שייך למחלקה *או לבנים שלה* (הכי נפוץ וגמיש):
# תעשה: שימוש ב-isinstance
if isinstance(workers[1], Employee):
    print("Sara is an Employee OR a subclass of Employee (like Manager).")

# אם מבקשים לבדוק קשר ירושה בין *שתי מחלקות* (ולא אובייקטים/משתנים):
# תעשה: שימוש ב-issubclass
if issubclass(Manager, Employee):
    print("Manager class inherits from Employee class.")


# ==========================================
# 3. עבודה עם קבצים (Files)
# ==========================================

# אם מבקשים ליצור קובץ חדש או "לדרוס" קובץ קיים ולנקות אותו:
# תעשה: פתח עם המצב "w" (Write)
with open("data.txt", "w", encoding="utf-8") as f:
    f.write("Alice,100\n")

# אם מבקשים "להוסיף רשומה" לסוף הקובץ בלי למחוק את ההיסטוריה:
# תעשה: פתח עם המצב "a" (Append)
with open("data.txt", "a", encoding="utf-8") as f:
    f.write("Bob,85\n")

# אם מבקשים לקרוא קובץ "שורה-שורה" ולנתח נתונים:
# תעשה: פתח עם "r" (Read), תריץ לולאה על הקובץ, ותשתמש ב-strip ו-split
with open("data.txt", "r", encoding="utf-8") as f:
    for line in f:
        clean_line = line.strip()       # מעיף רווחים וירידות שורה \n מהקצוות
        data_list = clean_line.split(',') # מפצל לרשימה [שם, ציון]
        print(f"Name: {data_list[0]}, Score: {data_list[1]}")

# אם מבקשים "לטפל במקרה שהקובץ לא קיים" בלי לקרוס:
# תעשה: תעטוף את הפתיחה ב-try/except מתאים
try:
    with open("missing_file.txt", "r", encoding="utf-8") as f:
        print(f.read())
except FileNotFoundError:
    print("The file was not found!")


# ==========================================
# 4. לוגים (Logging)
# ==========================================
import logging

# אם מבקשים "להגדיר מערכת לוגים בסיסית" בתחילת התוכנית:
# תעשה: תקרא ל-basicConfig. חשוב להגדיר level, אחרת INFO לא יודפס!
logging.basicConfig(
    level=logging.INFO, 
    format="%(asctime)s | %(levelname)s | %(message)s"
)

# אם מבקשים לתעד התחלה, סיום או "מהלך תקין":
# תעשה: logging.info
logging.info("Application started successfully.")

# אם מבקשים לתעד "מצב לא אידיאלי" שלא מפיל את התוכנה (למשל מלאי נמוך):
# תעשה: logging.warning
logging.warning("Low memory warning, but still running.")

# אם מבקשים לתעד "שגיאה קריטית":
# תעשה: logging.error
logging.error("Database connection failed!")

# אם מבקשים לתעד שגיאה בתוך try/except עם כל הפירוט המלא (Stack trace):
# תעשה: logging.exception במקום error
try:
    x = 10 / 0
except ZeroDivisionError:
    logging.exception("Math error occurred! See trace below:")

# אם השאלה במבחן שואלת "למה הלוג מסוג INFO לא יודפס למסך בקוד הבא?":
# התשובה שלך: "כי לא הוגדר level=logging.INFO ב-basicConfig, ופייתון מדפיסה כברירת מחדל רק WARNING ומעלה."
