# תרגילים: Callbacks ב־JavaScript עם מודול `fs` של Node.js

## מטרת התרגול

בתרגול הזה נלמד להשתמש ב־callbacks בצורה אסינכרונית בעזרת מודול `fs` של Node.js.

המטרות המרכזיות:

1. להבין מה זה callback.  
2. להבין למה פעולות של קריאה וכתיבה לקבצים הן אסינכרוניות.  
3. להכיר פעולות בסיסיות במודול `fs`.  
4. להבין למה קוד עם הרבה callbacks מקוננים עלול להפוך ל־callback hell.

---

## הכנה לפני התרגול

צרו תיקייה חדשה בשם:

callbacks-fs-practice

בתוכה צרו קובץ בשם:

app.js

בנוסף, צרו תיקייה בשם:

data

מבנה התיקיות אמור להיראות כך:

callbacks-fs-practice/

│

├── app.js

│

└── data/

בכל תרגיל הריצו את הקוד בעזרת:

node app.js

בכל התרגילים יש להשתמש במודול `fs` של Node.js.

const fs \= require('fs');

שימו לב: בתרגול הזה עובדים בכוונה עם הגרסאות שמקבלות callback, למשל:

fs.readFile(..., callback)

fs.writeFile(..., callback)

fs.appendFile(..., callback)

fs.mkdir(..., callback)

fs.readdir(..., callback)

---

# חלק א': היכרות עם Callback בסיסי

## תרגיל 1: כתיבה לקובץ

צרו בעזרת `fs.writeFile` קובץ חדש בשם:

data/message.txt

התוכן של הקובץ צריך להיות:

Hello from Node fs\!

אחרי שהכתיבה הסתיימה בהצלחה, הדפיסו למסך:

File was created successfully

אם יש שגיאה, הדפיסו את השגיאה.

---

## תרגיל 2: קריאה מקובץ

קראו בעזרת `fs.readFile` את הקובץ:

data/message.txt

והדפיסו את התוכן שלו למסך.

חשוב: השתמשו ב־encoding מתאים כדי לקבל מחרוזת ולא Buffer.

---

## תרגיל 3: הוכחת אסינכרוניות

כתבו קוד שמדפיס:

Start

אחר כך קורא את הקובץ `data/message.txt` בעזרת `fs.readFile`, ובתוך ה־callback מדפיס את תוכן הקובץ.

אחרי הקריאה, מחוץ ל־callback, הדפיסו:

End

נסו להסביר לעצמכם: למה `End` מודפס לפני תוכן הקובץ?

---

# חלק ב': טיפול בשגיאות

## תרגיל 4: קריאה מקובץ שלא קיים

נסו לקרוא קובץ שלא קיים:

data/not-exist.txt

אם יש שגיאה, הדפיסו:

Could not read file

ואחר כך הדפיסו את השגיאה עצמה.

אם אין שגיאה, הדפיסו את תוכן הקובץ.

---

## תרגיל 5: פונקציה שמקבלת callback

צרו פונקציה בשם `readTextFile`.

הפונקציה תקבל שני פרמטרים:

readTextFile(filePath, callback)

בתוך הפונקציה קראו את הקובץ בעזרת `fs.readFile`.

אם יש שגיאה, קראו ל־callback עם השגיאה.

אם אין שגיאה, קראו ל־callback עם `null` בתור שגיאה, ועם תוכן הקובץ בתור הפרמטר השני.

דוגמה לקריאה לפונקציה:
~~~
readTextFile('data/message.txt', function (err, content) {

  if (err) {

    console.log('Error:', err);

    return;

  }

  console.log(content);

});
~~~
---

# חלק ג': פעולות כתיבה ושרשור פעולות

## תרגיל 6: הוספת תוכן לקובץ

השתמשו ב־`fs.appendFile` כדי להוסיף לקובץ `data/message.txt` את השורה:

This line was added later.

אחרי שההוספה הסתיימה, קראו את הקובץ שוב והדפיסו את כל התוכן שלו.

---

## תרגיל 7: יצירת קובץ לוגים

צרו קובץ בשם:

data/log.txt

כתבו אליו את השורה:

Log started

אחר כך הוסיפו אליו עוד שתי שורות בעזרת `appendFile`:

First action completed

Second action completed

בסוף קראו את הקובץ והדפיסו את התוכן שלו.

שימו לב: הפעולות צריכות לקרות לפי הסדר.

---

# חלק ד': עבודה עם תיקיות

## תרגיל 8: יצירת תיקייה חדשה

צרו בעזרת `fs.mkdir` תיקייה בשם:

data/users

אם התיקייה נוצרה בהצלחה, הדפיסו:

Users folder created

אם התיקייה כבר קיימת, אל תגרמו לתוכנית לקרוס. הדפיסו הודעה מתאימה.

רמז: אפשר להשתמש באפשרות:

{ recursive: true }

---

## תרגיל 9: יצירת קובץ בתוך תיקייה

צרו קובץ בשם:

data/users/user1.txt

התוכן של הקובץ צריך להיות:

Name: David

Age: 25

לפני הכתיבה ודאו שהתיקייה `data/users` קיימת.

כל הפעולות צריכות להיות אסינכרוניות עם callbacks.

---

## תרגיל 10: קריאת רשימת קבצים מתיקייה

השתמשו ב־`fs.readdir` כדי לקרוא את רשימת הקבצים מתוך התיקייה:

data

הדפיסו למסך את שמות הקבצים והתיקיות שנמצאים בתוכה.

---

# חלק ה': Callbacks מקוננים

## תרגיל 11: יצירת כמה קבצים לפי סדר

צרו שלושה קבצים:

data/step1.txt

data/step2.txt

data/step3.txt

התוכן שלהם צריך להיות:

Step 1 completed

Step 2 completed

Step 3 completed

הדרישה: ליצור את `step2.txt` רק אחרי ש־`step1.txt` נוצר, ואת `step3.txt` רק אחרי ש־`step2.txt` נוצר.

בסוף הדפיסו:

All steps completed

---

## תרגיל 12: קריאה משלושה קבצים לפי סדר

קראו לפי הסדר את הקבצים:

data/step1.txt

data/step2.txt

data/step3.txt

אחרי שכל הקבצים נקראו, הדפיסו את שלושת התכנים למסך.

הדרישה: להשתמש ב־callbacks מקוננים.

---

# חלק ו'

## תרגיל 13: יצירת דוח פשוט

צרו את הקבצים הבאים:

data/report-title.txt

עם התוכן:

Daily Report

data/report-body.txt

עם התוכן:

Everything is working

אחר כך קראו את שני הקבצים, חברו את התוכן שלהם למחרוזת אחת, וכתבו אותה לקובץ חדש:

data/final-report.txt

התוכן הסופי צריך להיראות בערך כך:

Daily Report

Everything is working

כל הפעולות צריכות להתבצע עם callbacks.

---

## תרגיל 14: העתקת קובץ בלי `copyFile`

צרו קובץ בשם:

data/original.txt

עם התוכן:

Original file content

אחר כך קראו את הקובץ בעזרת `readFile`, וכתבו את אותו תוכן לקובץ חדש בשם:

data/copy.txt

בסוף קראו את `copy.txt` והדפיסו את התוכן שלו.

אסור להשתמש ב־`fs.copyFile`.

---

# חלק ז': בונוס, לא חובה

## תרגיל 15: בניית פרופיל משתמש מקבצים שונים

צרו תיקייה בשם:

data/profile

בתוכה צרו שלושה קבצים:

data/profile/name.txt

data/profile/email.txt

data/profile/age.txt

התוכן שלהם:

Yossi Cohen

yossi@example.com

30

אחר כך קראו את שלושת הקבצים לפי הסדר, ובסוף צרו קובץ חדש:

data/profile/profile.txt

התוכן שלו צריך להיות:

Name: Yossi Cohen

Email: yossi@example.com

Age: 30

הדרישה: לבצע הכל עם callbacks מקוננים.

---

## תרגיל 16: מערכת הרשמה קטנה

בנו תהליך אסינכרוני מלא בעזרת callbacks בלבד.

השלבים:

1. צרו תיקייה בשם `data/register`.  
2. צרו קובץ `user.txt` עם שם משתמש.  
3. צרו קובץ `password.txt` עם סיסמה.  
4. קראו את `user.txt`.  
5. קראו את `password.txt`.  
6. צרו קובץ `summary.txt` שמכיל:

User: \<username\>

Password length: \<number of characters\>

7. קראו את `summary.txt` והדפיסו אותו למסך.

הדרישה: להשתמש ב־callbacks מקוננים, גם אם הקוד מתחיל להיראות לא נוח.

בסוף התרגיל כתבו לעצמכם בתגובה בקוד:

// למה הקוד הזה נקרא callback hell?

---

## תרגיל 17: אתגר מסכם — Callback Hell מלא

בנו מערכת קטנה שיוצרת תיק פרויקט.

השלבים:

1. צרו תיקייה בשם:

data/project

2. בתוך התיקייה צרו קובץ:

data/project/title.txt

עם שם הפרויקט.

3. צרו קובץ:

data/project/description.txt

עם תיאור קצר.

4. צרו קובץ:

data/project/status.txt

עם סטטוס, למשל:

in progress

5. קראו את שלושת הקבצים לפי הסדר.  
     
6. צרו קובץ סיכום:

data/project/project-summary.txt

שיכיל:

Project: \<title\>

Description: \<description\>

Status: \<status\>

7. קראו את תיקיית `data/project` בעזרת `readdir`.  
     
8. הדפיסו למסך:

Project summary was created

Files in project folder:

ואז את רשימת הקבצים.  
