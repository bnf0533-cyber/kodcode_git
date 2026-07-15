# SQL JOINs — תרגיל

## טבלאות לעבודה

CREATE TABLE users (

  id      INTEGER PRIMARY KEY,

  name    TEXT NOT NULL,

  city\_id INTEGER

);

CREATE TABLE orders (

  id      INTEGER PRIMARY KEY,

  user\_id INTEGER,

  product TEXT,

  amount  INTEGER

);

CREATE TABLE cities (

  id      INTEGER PRIMARY KEY,

  city    TEXT,

  country TEXT

);

\-- נתונים:

INSERT INTO users VALUES (1,'Alice',10),(2,'David',11),(3,'Sarah',10),(4,'Noa',12);

INSERT INTO orders VALUES (1,1,'MacBook',2500),(2,1,'Phone',900),(3,3,'Tablet',600),(4,3,'Keyboard',150);

INSERT INTO cities VALUES (10,'Tel Aviv','IL'),(11,'Jerusalem','IL'),(12,'Haifa','IL');

David (id=2) ו-Noa (id=4) אין להם הזמנות.

---

## משימה 1 — INNER JOIN בסיסי

כתוב שאילתה שמחזירה: **שם משתמש \+ מוצר \+ סכום** לכל הזמנה.  
השתמש ב-alias (u, o).

**תוצאה צפויה:**

Alice  | MacBook  | 2500

Alice  | Phone    | 900

Sarah  | Tablet   | 600

Sarah  | Keyboard | 150

---

## משימה 2 — LEFT JOIN

כתוב שאילתה שמחזירה **כל משתמש** \+ המוצר הראשון שלו (או NULL אם אין).  
גם David ו-Noa חייבים להופיע.

**תוצאה צפויה (חלקית):**

Alice  | MacBook  

David  | NULL     

Sarah  | Tablet   

Noa    | NULL     

---

## משימה 3 — סינון LEFT JOIN

כתוב שאילתה שמחזירה **רק משתמשים שאין להם הזמנות** (WHERE \+ IS NULL).

**תוצאה צפויה:**

David

Noa

---

## משימה 4 — INNER JOIN עם WHERE

כתוב שאילתה שמחזירה הזמנות **עם סכום מעל 500** — כולל שם המשתמש.  
מיין לפי amount מהגבוה לנמוך.

---

## משימה 5 (בונוס) — JOIN 3 טבלאות

כתוב שאילתה שמחזירה: **שם משתמש \+ מוצר \+ עיר** לכל הזמנה.

**תוצאה צפויה:**

Alice  | MacBook  | Tel Aviv

Alice  | Phone    | Tel Aviv

Sarah  | Tablet   | Tel Aviv

Sarah  | Keyboard | Tel Aviv  
