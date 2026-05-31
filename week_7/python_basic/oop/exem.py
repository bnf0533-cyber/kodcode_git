# ==============================================================================
# מפת דרכים מלאה למבחן בפייתון - OOP, פולימורפיזם, קבצים ולוגים
# מוגש כבלוק קוד אחד, מוכן להעתקה, שינון ושליפה מהירה!
# ==============================================================================

# ==============================================================================
# 1. מחלקות, אובייקטים וירושה (OOP)
# ==============================================================================

# אם מבקשים "ליצור מחלקה" שמקבלת נתונים:
# תעשה: הגדרת __init__ ושמירת המשתנים עם self. (כל מתודה מקבלת self ראשון!)
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def get_details(self):
        return f"Employee {self.name} makes {self.salary}"

# אם מבקשים ליצור "תכונת מחלקה" (Class Attribute) לעומת תכונת אובייקט:
# תעשה: הגדר משתנה ישר מתחת לשם המחלקה, מחוץ ל-__init__. זה משותף לכולם.
class Company:
    company_name = "TechCorp" # משותף לכל האובייקטים מסוג Company
    
    def __init__(self, employee_name):
        self.employee_name = employee_name # שייך רק לאובייקט הספציפי

# אם מבקשים "לרשת ממחלקה" (יצירת מחלקת בן) ולהוסיף לה תכונות:
# תעשה: שים את ההורה בסוגריים, ובתוך ה-__init__ תקרא מיד ל-super().__init__
class Manager(Employee):
    def __init__(self, name, salary, department):
        super().__init__(name, salary) # אתחול תכונות ההורה
        self.department = department   # הוספת תכונה ייחודית לבן

    # אם מבקשים "לדרוס" (Override) פעולה של ההורה (למשל לתת הדפסה שונה למנהל):
    # תעשה: הגדר מתודה עם *בדיוק* אותו שם כמו אצל ההורה.
    def get_details(self):
        return f"Manager {self.name} of {self.department} makes {self.salary}"

# אם מבקשים להוסיף "Dunder Methods" (מתודות קסם) כדי שהדפסת האובייקט תהיה קריאה:
# תעשה: הוסף את המתודה __str__ שמחזירה מחרוזת.
    def __str__(self):
        return f"[Manager Object: {self.name}]"

# אם מבקשים להפעיל פעולה על רשימה של אובייקטים מסוגים שונים (פולימורפיזם):
# תעשה: לולאת for פשוטה. אל תבדוק סוגים (בלי if). פייתון תדע לקרוא למתודה הנכונה של כל אחד.
workers = [Employee("Dan", 5000), Manager("Sara", 12000, "HR")]
for w in workers:
    # דן ידפיס כעובד רגיל, שרה תדפיס כמנהלת. זה פולימורפיזם במיטבו.
    print(w.get_details()) 


# ==============================================================================
# 2. בדיקות טיפוסים (Type Checking - type, isinstance, issubclass)
# ==============================================================================

# אם השאלה שואלת "מתי נשתמש ב-type() לעומת isinstance()?":
# תעשה (בראש): type() היא בדיקה קשיחה ולא מתחשבת בירושה. 
# isinstance() היא בדיקה גמישה ולכן מומלצת יותר ב-OOP.

# אם מבקשים לבדוק אם אובייקט הוא *בדיוק* מסוג מסוים ואתה *לא* רוצה לכלול בנים/יורשים:
# תעשה: השתמש ב-type()
if type(workers[0]) == Employee:
    print("Dan is exactly an Employee, not a Manager.")

# אם מבקשים לבדוק אם אובייקט שייך למחלקה מסוימת *או* לאחת ממחלקות הבן שלה:
# תעשה: השתמש ב-isinstance(). כאן מתרחש קסם הירושה.
if isinstance(workers[1], Employee):
    # זה יחזיר True גם עבור Manager, כי מנהל הוא סוג של עובד!
    print("Sara is an Employee or a subclass of Employee.")

# אם מבקשים לבדוק קשר של ירושה בין *שתי מחלקות* (שים לב: מחלקות, לא משתנים/אובייקטים!):
# תעשה: השתמש ב-issubclass()
if issubclass(Manager, Employee):
    print("Yes, the Manager class inherits from the Employee class.")

# טריק מבחנים: אם ינסו לבלבל אותך עם פקודה כמו issubclass(workers[1], Employee):
# תעשה: תזכור שזה יזרוק שגיאה! issubclass מקבלת רק שמות של מחלקות (Classes), לא אובייקטים שנוצרו.


# ==============================================================================
# 3. עבודה עם קבצים (File Handling)
# ==============================================================================

# אם מבקשים "לפתוח קובץ בצורה בטוחה":
# תעשה: תמיד השתמש ב-with open. זה מונע "Resource Leak" וסוגר את הקובץ אוטומטית.

# אם מבקשים "ליצור קובץ חדש" או "לדרוס קובץ קיים לחלוטין":
# תעשה: פתח במצב "w" (Write).
with open("exam_data.txt", "w", encoding="utf-8") as f:
    f.write("Alice,100\nBob,85\n")

# אם מבקשים "להוסיף נתונים" לקובץ קיים בלי למחוק את התוכן הקודם (למשל יומן/לוג):
# תעשה: פתח במצב "a" (Append).
with open("exam_data.txt", "a", encoding="utf-8") as f:
    f.write("Charlie,92\n")

# אם מבקשים "לקרוא קובץ, לנקות שורות ולפצל נתונים" (הכי נפוץ!):
# תעשה: פתח במצב "r", השתמש בלולאת for, והפעל strip() ואז split().
with open("exam_data.txt", "r", encoding="utf-8") as f:
    for line in f:
        clean_data = line.strip().split(',') # מעיף את ה-\n ומפצל למערך ["Alice", "100"]
        print(f"Name: {clean_data[0]}, Score: {clean_data[1]}")

# אם מבקשים "לקרוא את כל השורות לרשימה אחת בזיכרון":
# תעשה: השתמש ב-readlines() (פחות מומלץ לקבצים ענקיים, אבל שואלים על זה).
with open("exam_data.txt", "r", encoding="utf-8") as f:
    all_lines_list = f.readlines()

# אם מבקשים "לטפל בשגיאה במקרה שהקובץ שביקשו לקרוא לא קיים":
# תעשה: עטוף ב-try ו-except מסוג FileNotFoundError.
try:
    with open("ghost_file.txt", "r") as f:
        pass
except FileNotFoundError:
    print("Error: The file does not exist.")


# ==============================================================================
# 4. מערכת לוגים (Logging)
# ==============================================================================
import logging

# אם מבקשים "להגדיר תצורת בסיס" ללוגר בתחילת הפרויקט (חובה לעשות פעם אחת בלבד):
# תעשה: שימוש ב-basicConfig. חובה להגדיר level אם רוצים לראות הודעות פשוטות.
logging.basicConfig(
    level=logging.DEBUG, # הגדרה זו קובעת ש*הכל* החל מ-DEBUG ומעלה יודפס
    format="%(asctime)s | %(levelname)s | %(name)s | %(message)s",
    filename="app_log.txt" # אם מוסיפים את זה, הלוגים יישמרו לקובץ ולא יודפסו למסך! (טריק למבחן)
)

# אם לא מוסיפים את פרמטר ה-filename ל-basicConfig: 
# אז כברירת מחדל ההדפסות יצאו למסך (Console). 

# אם מבקשים "לתעד ערכי משתנים / מידע מפורט לפיתוח" (הרמה הנמוכה ביותר):
# תעשה: logger.debug
logging.debug("Starting loop, variables initialized.")

# אם מבקשים לתעד "התקדמות תקינה של המערכת" או "הצלחה של פעולה":
# תעשה: logger.info
logging.info("User logged in successfully.")

# אם מבקשים לתעד "משהו לא אידיאלי אבל המערכת ממשיכה לעבוד" (למשל מלאי נמוך):
# תעשה: logger.warning
logging.warning("Memory is running low, but program is stable.")

# אם מבקשים לתעד "שגיאה רגילה שפוגעת בפעולה הספציפית":
# תעשה: logger.error
logging.error("Failed to connect to the database!")

# אם מבקשים לתעד שגיאה *בתוך בלוק try-except* ורוצים לראות את כל שרשרת הקריסה (Stack Trace):
# תעשה: חובה להשתמש ב-logging.exception ולא סתם error. זה מדפיס את הקוד שקרס.
try:
    calc = 10 / 0
except ZeroDivisionError:
    logging.exception("A critical math crash occurred here:")

# אם השאלה מציגה קוד שבו הגדירו logging.basicConfig(level=logging.WARNING) או לא הגדירו כלל:
# ושואלים "האם ההודעה logging.info('hello') תודפס?":
# תעשה: ענה חד משמעית "לא!". ברירת המחדל של פייתון היא WARNING. 
# משמע רק הודעות ברמת WARNING, ERROR, ו-CRITICAL יודפסו אם לא שינינו את ה-level.

# אם מבקשים ליצור לוגר נפרד למחלקה או קובץ (ולא להשתמש ב"לוגר השורש"):
# תעשה: הגדר לוגר פרטי בעזרת getLogger ו- __name__
my_logger = logging.getLogger(__name__)
my_logger.info("This is a message from my specific module logger.")