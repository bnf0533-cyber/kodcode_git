# req.params ו-req.query — תרגילים

const products \= \[

  { id: 1, name: 'Laptop',  price: 3000, category: 'tech' },

  { id: 2, name: 'Mouse',   price: 150,  category: 'tech' },

  { id: 3, name: 'Desk',    price: 800,  category: 'furniture' },

  { id: 4, name: 'Monitor', price: 1200, category: 'tech' },

\];

## תרגיל 1 — req.params

צור שרת Express עם:

- GET /products/:id — מחזיר מוצר לפי id  
- ולידציה: id לא מספר → 400; לא נמצא → 404

**בדיקה:**

- GET /products/1 → { id: 1, name: 'Laptop', ... }  
- GET /products/99 → { error: 'not found' } \+ 404

---

## תרגיל 2 — req.query

הוסף:

- GET /products — כל המוצרים  
- GET /products?category=tech — לפי קטגוריה  
- GET /products?minPrice=200\&maxPrice=1000 — טווח מחיר  
- GET /products?sort=price — ממוין לפי מחיר עולה

**כלל:** query param חסר \= ממשיכים ללא אותו פילטר.

---

## תרגיל 3 — שניהם יחד

הוסף DELETE /products/:id?confirm=true:

- req.params.id — מזהה המוצר  
- req.query.confirm — חייב להיות 'true'; אחרת → 400 עם הסבר  
- מוצר לא קיים → 404  
- מחיקה מוצלחת → 204

