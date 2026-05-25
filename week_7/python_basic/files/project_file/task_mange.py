import os
def load_tasks(filename):
    '''
    :dicts קוראת את הקובץ ומחזירה רשימה של
    [{'id': 1, 'status': 'PENDING', 'desc': 'ללמוד Python'}, ...]
    אם הקובץ לא קיים — מחזירה רשימה ריקה
    '''
    if os.path.exists(filename):
        with open(filename,"r") as file:
            read = file.readlines()
            taska_list = []
            for i in read:
                tasks_dict = {}
                parts = i.strip().split("|")
                tasks_dict["id"] = int(parts[0])
                tasks_dict["status"] = parts[1]
                tasks_dict["desc"] = parts[2]
                taska_list.append(tasks_dict)
    else:
        return []
        
    return taska_list

def save_tasks(filename, tasks):
    '''
    שומרת את רשימת המשימות לקובץ
    description|status|id :פורמט כל שורה
    '''
    with open(filename , "w") as file:
        for task in tasks:
            line_to_write = f"{task['id']}|{task['status']}|{task['desc']}\n"
            file.write(line_to_write)

def add_task(filename, description):
    '''
    :מוסיפה משימה חדשה עם
    מספר המשימה הבאה = ID -
    - status = 'PENDING'
    הפרמטר שניתן = description -
    '''
    task_list = load_tasks(filename)
    if len(task_list) == 0:
        next_id = 1
    else:
        next_id = task_list[-1]["id"] + 1
    new_task = {'id' : next_id , 'status' :'PENDING' , 'desc' : description}
    task_list.append(new_task)
    save_tasks(filename,task_list)

def complete_task(filename, task_id):
    '''
    DONE-ל PENDING-מ id_task של משימה status משנה את
    לא קיים — מדפיסה הודעת שגיאה ID-אם ה
    '''
    found = False
    task_list = load_tasks(filename)
    for task in task_list:
        if task['id'] == task_id:
            task['status'] = 'DONE'
            found = True
            save_tasks(filename,task_list)
            break
    if found == False:
        print("id not found.")

def list_tasks(filename):
    '''
    :מציגה את כל המשימות בפורמט מסודר
    ]✓[ 2 [ 2 |לכת תרתרג 1
    ] [ 3 | לסיים את הפרויקט
    '''
    upload = load_tasks(filename)
    for i in upload:
        if i['status'] == 'DONE':
            print(f"{i['id']}|{i['status']}|{i['desc']}")
        if i['status'] == 'PENDING':
            print("finish that.")


def main():
    FILENAME = "tasks.txt"
    while True:
        print('\n=== To-Do List Manager ===')
        print('1. הצג משימות')
        print('2. הוסף משימה')
        print('3. סמן כהושלם')
        print('4. יציאה')
        choice = input('בחירה: ')
        if choice == '1':
            list_tasks(FILENAME)
        elif choice == '2':
            desc = input('תיאור המשימה: ')
            add_task(FILENAME, desc)
            print('המשימה נוספה!')
        elif choice == '3':
            try:
                task_id = int(input('משימה מספר: '))
                complete_task(FILENAME, task_id)
            except ValueError:
                print('נא להזין מספר תקין!')
        elif choice == '4':
            print('להתראות!')
            break
        else:
            print('בחירה לא תקינה, נסה שוב.')

if __name__ == '__main__':
    main()