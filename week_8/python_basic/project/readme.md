## API Documentation
# פרויקט ניהול חיילים



| Method | Path | קלט (Input) | פלט (Output) | קודי תשובה (Status Codes) |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/soldiers` | ללא קלט | רשימה של כל החיילים בפורמט JSON | `200 OK` |
| **GET** | `/soldiers/{id}` | מזהה חייל (`id`) ב-URL | אובייקט JSON של החייל שנמצא | `200 OK` (נמצא)<br>`404 Not Found` (לא קיים) |
| **POST** | `/soldiers` | **גוף הבקשה (JSON Body):**<br>`{ "id": 1234, "full_name": "davis", "rank": "rav_aluf", "role": "major", "unit": "8200", "status": "surve" }` | פרטי החייל שנוצר או הודעת הצלחה | `201 Created` (נוצר בהצלחה)<br>`400 Bad Request` (קלט לא תקין או מזהה כבר קיים) |
| **PUT** | `/soldiers/{id}` | מזהה חייל ב-URL + הנתונים לעדכון בגוף הבקשה (JSON) | אובייקט החייל המעודכן | `200 OK` (עודכן)<br>`400 Bad Request` (קלט דפוק)<br>`404 Not Found` (חייל לא קיים) |
| **DELETE** | `/soldiers/{id}` | מזהה חייל (`id`) ב-URL | הודעת אישור שהמחיקה בוצעה | `200 OK` (נמחק בהצלחה)<br>`404 Not Found` (לא נמצא) |



שרת מבוסס FastAPI לניהול רשימת החיילים בפלוגה

מודל הנתונים הוא מילון עבור כל חייל שנשמר ישירות לקובץ soldiers.json
המזהים הם מספרים שלמים שמועברים ב-body או בנתיב

הוראות הרצה:
pip install -r requirements.txt
uvicorn main:app --reload

ניתן לבדוק את הכל דרך הסוואגר בכתובת המקומית עם סיומת /docs