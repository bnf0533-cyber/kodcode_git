# פרויקט: קריאה וכתיבה אסינכרונית בקבצים

**נושא:** Callbacks & Promises עם `fs` של Node.js  
**קובץ:** `async-files.js`

---

## רקע

עד עכשיו כתבנו קוד **סינכרוני** — כל שורה מחכה לקודמת לפני שהיא רצה.  
בעולם האמיתי, פעולות כמו קריאה מקובץ, בקשות לשרת, ושאילתות DB לוקחות זמן.  
JavaScript לא "נועלת" את התוכנית בזמן ההמתנה — היא ממשיכה הלאה ומודיעה לנו כשהפעולה גמרה.

כך זה עובד:

קוד ← שולח בקשה לקובץ → ממשיך הלאה

                              ↓

              (קובץ נקרא ברקע)

                              ↓

              callback / promise מופעל עם התוצאה

בפרויקט הזה נתרגל שתי גישות:

1. **Callbacks** — הגישה הישנה, עדיין נפוצה מאוד  
2. **Promises** — הגישה המודרנית, נקייה יותר

---

## הגדרת סביבה

mkdir async-project

cd async-project

npm init \-y

צרו קובץ `async-files.js` — שם תכתבו את כל הקוד.

בראש הקובץ הוסיפו:

const fs \= require('fs');

**`fs`** \= File System — הספרייה המובנית של Node.js לעבודה עם קבצים.  
אין צורך להתקין אותה, היא כבר קיימת.

---

## משימה 1 — קריאה מקובץ עם Callback

### הכנה

צרו קובץ בשם `input.txt` עם התוכן הבא:

שלום עולם

זה קובץ הקלט שלי

Node.js מגניב

### המשימה

השתמשו ב-`fs.readFile` כדי לקרוא את הקובץ ולהדפיס את תוכנו.

**חתימת הפונקציה:**

fs.readFile(נתיב, קידוד, callback)

ה-callback מקבל תמיד שני פרמטרים:

- `err` — שגיאה (או `null` אם הכל תקין)  
- `data` — התוכן שנקרא

**תבנית:**

fs.readFile('input.txt', 'utf8', function(err, data) {

  // כתבו כאן את הקוד

});

**מה לממש:**

- אם יש שגיאה — הדפיסו: `שגיאה בקריאה: <הודעת השגיאה>`  
- אם הצליח — הדפיסו: `תוכן הקובץ:` ואחריו את `data`

---

## משימה 2 — כתיבה לקובץ עם Callback

השתמשו ב-`fs.writeFile` כדי לכתוב לקובץ חדש בשם `output.txt`.

**חתימת הפונקציה:**

fs.writeFile(נתיב, תוכן, callback)

ה-callback מקבל פרמטר אחד בלבד: `err`.

**מה לממש:**

- כתבו לקובץ את הטקסט: `"נכתב בהצלחה על ידי Node.js!"`  
- אם יש שגיאה — הדפיסו: `שגיאה בכתיבה: <הודעת השגיאה>`  
- אם הצליח — הדפיסו: `הקובץ נכתב בהצלחה`

---

## משימה 3 — שרשור Callbacks (Callback Chain)

כאן תרגישו את ה**כוח** — ואת ה**כאב** — של callbacks.

**מה לממש, בסדר הבא:**

1. קראו את `input.txt`  
2. רק אחרי שהקריאה הצליחה — המירו את כל הטקסט לאותיות גדולות (`.toUpperCase()`)  
3. כתבו את התוצאה לקובץ `output-upper.txt`  
4. רק אחרי שהכתיבה הצליחה — הדפיסו: `הכל הסתיים בהצלחה!`

שימו לב: כל שלב מתרחש **בתוך** ה-callback של השלב הקודם.  
זה נקרא **Callback Hell** — ותבינו למה בדיוק.

---

## משימה 4 — קריאה עם Promise

`fs.promises` היא גרסת ה-Promise של `fs`.

const fsPromises \= require('fs').promises;

**חתימת הפונקציה:**

fsPromises.readFile(נתיב, קידוד)  // מחזירה Promise

על Promise אפשר לקרוא `.then()` ו-`.catch()`:

fsPromises.readFile('input.txt', 'utf8')

  .then(function(data) {

    // הצליח

  })

  .catch(function(err) {

    // נכשל

  });

**מה לממש:**

- קראו את `input.txt` באמצעות `fsPromises.readFile`  
- בתוך `.then` — הדפיסו: `קראתי עם Promise:` ואת התוכן  
- בתוך `.catch` — הדפיסו: `שגיאה: <הודעת השגיאה>`

---

## משימה 5 — שרשור Promises

הממשו את אותה פונקציונליות של משימה 3 — אבל עם Promises.

fsPromises.readFile('input.txt', 'utf8')

  .then(function(data) {

    // המירו ל-uppercase וכתבו לקובץ

    // חשוב: החזירו את ה-Promise של הכתיבה\!

    return fsPromises.writeFile(...)

  })

  .then(function() {

    // הדפיסו הודעת הצלחה

  })

  .catch(function(err) {

    // טפלו בשגיאה

  });

**טיפ:** `return` בתוך `.then` הוא קריטי\!  
בלעדיו ה-`.then` הבא לא יחכה לסיום הפעולה.

---

## בונוס — Promise.all

קראו **בו-זמנית** שני קבצים (`input.txt` ו-`output.txt`) וחכו לשניהם יחד:

Promise.all(\[

  fsPromises.readFile('input.txt', 'utf8'),

  fsPromises.readFile('output.txt', 'utf8')

\]).then(function(results) {

  // results הוא מערך עם שתי התוצאות

}).catch(function(err) {

  // ...

});

**מה לממש:** הדפיסו את האורך (מספר תווים) של כל קובץ.

---

## שאלות להגשה

ענו על השאלות הבאות **בתגובות בתוך הקוד** (`//`):

1. מה ההבדל בין `fs.readFile` ל-`fsPromises.readFile`?  
2. למה ב-Callback Chain הקוד מתנסך פנימה (Callback Hell)?  
3. מה היתרון של `.then().then()` על פני callbacks מקוננים?  
4. מה קורה אם שוכחים `return` בתוך `.then`?

---

## מה להגיש

קובץ אחד: `async-files.js` עם כל 5 המשימות (והבונוס אם עשיתם).  
הקוד צריך לרוץ עם `node async-files.js` ללא שגיאות.  
