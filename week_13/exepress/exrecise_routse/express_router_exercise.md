# Express Router — תרגילים

## תרגיל 1 — router בסיסי

צור `routes/tasks.js` עם:

- `GET /` — מחזיר כל המשימות  
- `POST /` — יוצר משימה עם `{ title }`; ולידציה: title חסר → 400

חבר ב-`app.js` כך שהroutes יהיו תחת `/tasks`:

- `GET /tasks` → כל המשימות  
- `POST /tasks` → יצירת משימה

---

## תרגיל 2 — params ב-router

הרחב את `routes/tasks.js` עם:

- `GET /:id` — מחזיר משימה ספציפית; 404 אם לא קיים  
- `DELETE /:id` — מוחק משימה; 404 אם לא קיים, 204 אם הצליח

**בדיקה:**

- `GET /tasks/1` → `{ id: ..., title: '...' }`  
- `DELETE /tasks/999` → 404

---

## תרגיל 3 — שני routers

צור גם `routes/notes.js` עם `GET /` ו-`POST /`.

חבר ב-`app.js`:

app.use('/tasks', tasksRouter);

app.use('/notes', notesRouter);

**הוכח שהם עצמאיים:** tasks ו-notes לא חולקים נתונים.

---

## תרגיל 4 — query ב-router

ב-`GET /tasks?done=true` — פלטר משימות לפי סטטוס.

הוסף שדה `done: false` לכל משימה חדשה.

`PUT /:id` עם `{ done: true }` — מסמן משימה כגמורה.  
