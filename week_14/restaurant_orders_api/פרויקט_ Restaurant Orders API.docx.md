# **פרויקט: Restaurant Orders API**

עליכם לבנות שרת לניהול הזמנות במסעדה.

הנתונים יישמרו בקובץ **JSON**.

# **Endpoints**

## **יצירת הזמנה**

POST /orders

יוצר הזמנה חדשה ושומר אותה בקובץ.

## **קבלת כל ההזמנות**

GET /orders

מחזיר את כל ההזמנות.

יש לתמוך בסינון באמצעות Query Params.

דוגמאות:

GET /orders?status=NEW

GET /orders?customer=David

GET /orders?table=5

GET /orders?status=READY\&table=5

## **קבלת הזמנה לפי מזהה**

GET /orders/:id

מחזיר הזמנה לפי מזהה.

## **עדכון הזמנה**

PUT /orders/:id

מעדכן את כל פרטי ההזמנה.

## **מחיקת הזמנה**

DELETE /orders/:id

מוחק הזמנה.

## **עדכון סטטוס הזמנה**

PATCH /orders/:id/status

מעדכן את סטטוס ההזמנה בלבד.

יש לאפשר את המעברים הבאים בלבד:

NEW → PREPARING

PREPARING → READY

READY → DELIVERED

NEW → CANCELLED

PREPARING → CANCELLED

כל מעבר אחר יוחזר כשגיאה.

# **Middleware**

יש לממש לפחות את ה־Middleware הבאים:

* Logger Middleware  
* Validation Middleware  
* Check ID Middleware

# **Error Handling**

יש לממש Error Handler מרכזי.

יש לטפל לפחות במקרים הבאים:

* Order not found  
* Invalid ID  
* Missing required fields  
* Invalid status  
* Invalid status transition  
* File read/write error  
* Route not found  
* Internal server error

# **Status Codes**

200 OK

201 Created

400 Bad Request

404 Not Found

500 Internal Server Error

# **ארכיטקטורה**

האחריות היא עליכם אתם צריכים לבנות את זה בצורה הגיונית ונכונה לפי מה שלמדתם איך מחלקים.

# **בדיקות חובה**

* יצירת הזמנה  
* קבלת כל ההזמנות  
* סינון באמצעות Query Params  
* קבלת הזמנה לפי ID  
* עדכון הזמנה  
* עדכון סטטוס  
* מחיקת הזמנה  
* ID לא קיים  
* נתונים חסרים  
* מעבר סטטוס לא חוקי  
* Route שלא קיים  
* בדיקה שהקובץ מתעדכן לאחר כל פעולה

