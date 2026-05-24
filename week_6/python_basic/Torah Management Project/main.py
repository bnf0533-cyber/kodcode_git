from soldier_manager import add_soldier , remove_soldier,get_all_soldiers
from duty_manager  import add_duty_to_soldier , update_duty_status,get_soldier_duties
def show_menu() -> None:
    """
    מציגה את התפריט הראשי למשתמש.
    
    מקבלת: כלום
    מחזירה: כלום (מדפיסה לקונסול)
    
    למה הפונקציה קיימת:
    הפרדה בין הצגת התפריט לבין הלוגיקה העסקית.
    אם נרצה לשנות את התצוגה, נשנה רק כאן.
    """
    print("""
=== Soldier & Duty Management System ===
1. Add New Soldier
2. Remove Soldier
3. View All Soldiers
4. Add Duty to Soldier
5. Update Duty Status
6. View Soldier Duties
7. Exit
""")


def get_user_choice() -> str:
    """
    מקבלת בחירה מהמשתמש.
    
    מקבלת: כלום
    מחזירה: מחרוזת המייצגת את בחירת המשתמש
    
    למה הפונקציה קיימת:
    הפרדת קבלת קלט מהמשתמש מהלוגיקה של עיבוד הבחירה.
    מאפשר להחליף את שיטת הקלט בעתיד (למשל, GUI).
    """
    return input("please enter your choice: ")


def handle_add_soldier() -> None:
    """
    מטפלת בתהליך הוספת חייל חדש.
    מקבלת קלט מהמשתמש וקוראת לפונקציות המתאימות.
    
    מקבלת: כלום
    מחזירה: כלום
    
    למה הפונקציה קיימת:
    מפרידה בין הקלט/פלט לבין הלוגיקה העסקית.
    main.py אחראי על אינטראקציה עם המשתמש,
    soldier_manager.py אחראי על הלוגיקה.
    """
    try:
        enter_id = int(input("please enter id: "))
        enter_name = input("please enter name: ")
        add_soldier(enter_id , enter_name)
        print("solider added successfully!")
    
    except ValueError as e:
        print(f"error: {e}")


def handle_remove_soldier() -> None:
    """
    מטפלת בתהליך הסרת חייל.
    מקבלת קלט מהמשתמש וקוראת לפונקציות המתאימות.
    
    מקבלת: כלום
    מחזירה: כלום
    
    למה הפונקציה קיימת:
    הפרדה בין UI לבין לוגיקה עסקית.
    """
    try:
        enter_id = int(input("please enter id: "))
        remove_soldier(enter_id)
        print("soilder removed successfully!")
    except KeyError as e:
        print(f"error: {e}")


def handle_view_soldiers() -> None:
    """
    מטפלת בתהליך הצגת כל החיילים.
    קוראת לפונקציה המתאימה ומציגה את התוצאה.
    
    מקבלת: כלום
    מחזירה: כלום
    
    למה הפונקציה קיימת:
    הפרדה בין קבלת הנתונים לבין הצגתם.
    """
    all_soldier = get_all_soldiers()
    if len(all_soldier) == 0:
        return print("the soldier list is empty.")
    for soldier in all_soldier:
        print(f"{soldier['name']} | {soldier['id']}")

def handle_add_duty() -> None:
    """
    מטפלת בתהליך הוספת תורנות לחייל.
    מקבלת קלט מהמשתמש וקוראת לפונקציות המתאימות.
    
    מקבלת: כלום
    מחזירה: כלום
    
    למה הפונקציה קיימת:
    הפרדה בין UI לבין לוגיקה עסקית.
    """
    try:
        solider_id = int(input("please enter id: "))
        duty_name = input("please enter duty: ")
        day = input("please enter day: ")
        add_duty_to_soldier(solider_id,duty_name,day)
        print("duty added successfully!")
    except (KeyError, ValueError) as e:
        print(f"error: {e}")


def handle_update_duty_status() -> None:
    """
    מטפלת בתהליך עדכון סטטוס תורנות.
    מקבלת קלט מהמשתמש וקוראת לפונקציות המתאימות.
    
    מקבלת: כלום
    מחזירה: כלום
    
    למה הפונקציה קיימת:
    הפרדה בין UI לבין לוגיקה עסקית.
    """
    try:
        solider_id = int(input("please enter id: "))
        duty_name = input("please enter duty: ")
        new_status = input("please enter new status: ")
        update_duty_status(solider_id,duty_name,new_status)
        print("status added successfully!")
    except (KeyError , ValueError) as e:
        print(f"error: {e}")


def handle_view_soldier_duties() -> None:
    """
    מטפלת בתהליך הצגת תורנויות של חייל.
    מקבלת קלט מהמשתמש וקוראת לפונקציות המתאימות.
    
    מקבלת: כלום
    מחזירה: כלום
    
    למה הפונקציה קיימת:
    הפרדה בין UI לבין לוגיקה עסקית.
    """
    solider_id = int(input("please enter id: "))
    try:
        duties = get_soldier_duties(solider_id)
        if len(duties) == 0:
            return print("this soldier has no duties assigned.")
            
        for duti in duties:
            print(f"{duti['name']} {duti['day']} {duti['status']}")
    except KeyError as e:
        print(f"error: {e}")
    


def main() -> None:
    """
    הפונקציה הראשית של התוכנית.
    מריצה לולאה ראשית שמציגה תפריט, מקבלת בחירה ומפעילה פעולה.
    
    מקבלת: כלום
    מחזירה: כלום
    
    למה הפונקציה קיימת:
    נקודת הכניסה לתוכנית. מנהלת את הזרימה הראשית.
    """
    while True:
        show_menu()
        choice = get_user_choice()
        if choice == "1":
            handle_add_soldier()
        elif choice == "2":
            handle_remove_soldier()
        elif choice == "3":
            handle_view_soldiers()
        elif choice == "4":
            handle_add_duty()
        elif choice == "5":
            handle_update_duty_status()
        elif choice == "6":
            handle_view_soldier_duties()
        elif choice == "7":
            print("goodbye!")
            break
        else:
            print("invalid choice, please try again.")

if __name__ == "__main__":
    main()