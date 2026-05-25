import logging
from datetime import datetime
# 1
"""
.1_x__ print ו-logging הם שקולים לחלוטין
.2 _v__ DEBUG מתאים למידע מפורט בזמן פיתוח
.3 _x__ מותר לכתוב סיסמה בלוג אם היא מוצפנת
.4 _x__ WARNING אומר שהמערכת קרסה
.5 __v_ FileHandler שומר לוגים לקובץ
stack trace גם כולל logger.exception _v__ .6
.7 _x__ כדאי להשתמש ברמת לוג אחת בלבד לפשטות
"""

# 2
"""
לכל תיאור, ציין את רמת הלוג המתאימה )ERROR / WARNING / INFO / DEBUG):
.1 משתמש התחבר בהצלחה: _info__
.2 קובץ קונפיגורציה לא נמצא: _error__
.3 כניסה לפונקציה עם ערכי הפרמטרים: _info__
.4 מסד הנתונים לא זמין: __error_
.5 מלאי מוצר נמוך מ5- יחידות: __warning_
.6 תהליך הזמנה הסתיים בהצלחה: _info_
"""

# 3
"""
מצא את הבעיה בכל לוג ותקן:
# לוג א
logger.error('User logged in successfully')
בעיה: בעיה כי זה לא ERROR 
תיקון: להחליף ל INFO
# לוג ב
logger.info('Login', email, password)
בעיה: הבעיה היא שהכנסנו סיסמה לקובץ לוג
תיקון: להעיף את הסיסמה מהלוג
# לוג ג
print('ERROR: payment failed')
בעיה ותיקון:עשיתה פרינט טזה יפה מאוד אבל דפוק בגלל שאחרי שנגמרת הריצה לא יהיה לך שום מושג אם קרה משהו טיפש
"""

# 4
"""
הסבר מה מייצג כל שדה בפורמט הבא:
'%(asctime)s | %(levelname)s | %(name)s | %(message)s'
%(asctime)s: ממדפיס את הזמן שבו הלוג התבקש לתעד
%(levelname)s: רמת החומרה של הלוג מקריסה ועד תיעוד
%(name)s:שם הלוגר שהוגדר
%(message)s: הודעה שבה יש תיעוד של הלוג מה שרצינו לשים שם
"""

# 5

# logging.basicConfig(level=logging.INFO, format='%(levelname)s | %(message)s')
# logger = logging.getLogger(__name__)
# logger.info('Application started')

# 6

# def process_payment(user_id, amount):
#     logger.info(f'Starting payment for user {user_id}')
#     if amount <= 0:
#         logger.error('ERROR: Invalid amount')
#         return
#     if amount > 10000:
#         logger.warning('WARNING: Large transaction')
#         logger.info(f'Payment of {amount} completed for user {user_id}')


# 7

def add_filhandler():
    logger = logging.getLogger('payments')
    file_handler = logging.FileHandler("app.loge",encoding="utf-8")
    formatter = logging.Formatter('%(asctime)s | %(levelname)s | %(name)s')
    file_handler.setFormatter(formatter)
    logger.addHandler(file_handler)
    logger.info("application started.")
    logger.warning("the quantity is lower.")
    logger.error("batery off.")


# 8

def read_config(filepath):
    logger = logging.getLogger('payments')
    file_handler = logging.FileHandler("app.loge",encoding="utf-8")
    formatter = logging.Formatter('%(asctime)s | %(levelname)s | %(name)s')
    file_handler.setFormatter(formatter)
    logger.addHandler(file_handler)
    # לפני הניסיון filepath עם DEBUG הוסף :TODO
    logger.debug(f"{filepath}")
    try:
        with open(filepath) as f:
            data = f.read()
            logger.info("the reading complet.")
    # על הצלחה INFO הוסף :TODO #
        return data
    except FileNotFoundError:
        logger.exception("error: file not found.")
    # לוג exception הוסף :TODO #
        return None

# 9
def write_structured_log(level, module, message, **extra):
    pass

# 10
"""
לכל לוג, ציין מה חסר בו ואיך לשפר:
logger.info('done')
מה חסר ואיך לשפר: חסר אינפורמציה יותר מדוייקת 
logger.error('failed')
מה חסר ואיך לשפר: חסר פירוט על השגיאה 
logger.info('user=%s', user_id)
מה טוב ומה עוד אפשר להוסיף: טוב זה שישפירוט על השם אפשר להוסיף extra על הפירוט שיחזיר לנו את השם
"""

# 11
"""
תרגיל 11 – חלוקת אירועים לרמות
סווג כל אירוע מהמערכת לרמת הלוג הנכונה:

• אדמין נכנס למערכת הניהול = info
• שירות חיצוני לא מגיב = error
• פונקציית חישוב מס החלה לרוץ = info
• תעודת SSL עומדת לפוג בעוד 7 ימים = werning
• הזמנה בוטלה על ידי לקוח = info
• תשלום נכשל 3 פעמים ברצף = werning
"""

# 12
import logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)
def register_user(email, password, age):
    logger.debug('register user start')
    if age < 18:
        logger.error('the user is yang')
        return
    logger.info('ok email=%s password=%s', email, password)
    logger.info('the user regist')

# 13
def get_logger(name):
    logger = logging.getLogger(name)
    logger.setLevel(logging.INFO)
    formatter = logging.Formatter('%(asctime)s | %(name)s | %(levelname)s | %(message)s')
    strem_handler = logging.StreamHandler()
    strem_handler.setFormatter(formatter)
    file_handler = logging.FileHandler("app.log", encoding="utf-8")
    file_handler.setFormatter(formatter)
    logger.addHandler(strem_handler)
    logger.addHandler(file_handler)
    return logger

# 14

def process_request(requst_id,user_id):
    logger = get_logger("log")
    logger.debug(f"the tequst id is: {requst_id} and the user id is: {user_id} .")
    if 10000 > user_id < 5888:
        logger.warning(f"the {user_id} is to diffrent in the {requst_id}.")
    else:
        logger.info(f"the '{requst_id} {user_id}'requst successfully!")
