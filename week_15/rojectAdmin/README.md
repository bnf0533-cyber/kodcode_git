# DB Admin Dashboard

שרת Express ו-MongoDB (Mongoose) לניהול מוצרים ומלאי, מותאם לעבודה משולבת עם MongoDB Compass.

##  Endpoints

| מתודה | נתיב | תיאור | גוף הבקשה (Body) |
| :--- | :--- | :--- | :--- |
| `GET` | `/products` | שליפת כל המוצרים הפעילים (`active: true`) | — |
| `POST` | `/products` | הוספת מוצר חדש | `{ name, category, price, stock, active }` |
| `GET` | `/products/stats` | אגרגציה וסטטיסטיקות לפי קטגוריה | — |
| `PATCH` | `/products/:id/stock` | עדכון מלאי (חיובי להוספה, שלילי להפחתה) | `{ amount: 5 }` |

---

## מודל מוצר (Product Schema)

- **`name`** *(String, required)* — שם המוצר
- **`category`** *(String)* — קטגוריה (`food`, `tech`, `clothing`, `other`)
- **`price`** *(Number, min: 0)* — מחיר המוצר
- **`stock`** *(Number, default: 0)* — כמות במלאי
- **`active`** *(Boolean, default: true)* — מוצר פעיל/לא פעיל

---

##  מבנה הפרויקט

```text
├── app.js             # הפעלת השרת והגדרות Express
├── routes/
│   └── router.js      # הגדרת הראוטים
├── ctrl/
│   └── controller.js  # בקרים (Controllers) והטיפול בבקשות
├── service/
│   └── service.dal.js # לוגיקה עסקים ושליפות מול בסיס הנתונים
├── db/
│   └── db.js          # חיבור ל-MongoDB
└── models/
    └── Product.js     # סכמת Mongoose
```

---

##  הרצה מקומית

1. **התקנת תלויות:**
   ```bash
   npm install
   ```

2. **קובץ סביבה:**
   וודאו שקיים קובץ `.env` מתאים עם היציאה (`PORT`) וחיבור בסיס הנתונים (`MONGO_URI`).

3. **הפעלת השרת:**
   ```bash
   npm start
   ```
