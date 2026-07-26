# יסודות בדיקות קוד — תרגיל

## מטרה
כתוב בדיקות לפונקציות JavaScript פשוטות — ללא Express, ללא DB, רק פונקציות ו-Vitest.

---

## הכנה

```bash
npm install -D vitest
```

ב-`package.json`:
```json
{
  "scripts": { "test": "vitest" }
}
```

---

## חלק 1 — הפונקציות (קובץ `math.js`)

כתוב את הפונקציות הבאות:

```javascript
// 1. מחזירה true אם המספר זוגי
export function isEven(n) { /* TODO */ }

// 2. מחזירה את המספר הגדול מבין שניים
export function max(a, b) { /* TODO */ }

// 3. מחשבת ממוצע של מערך מספרים
//    זורקת שגיאה אם המערך ריק
export function average(numbers) { /* TODO */ }

// 4. הופכת מחרוזת ל-Title Case ("hello world" → "Hello World")
export function toTitleCase(str) { /* TODO */ }

// 5. מחזירה את כל המספרים הזוגיים במערך
export function filterEven(numbers) { /* TODO */ }
```

---

## חלק 2 — הבדיקות (קובץ `math.test.js`)

כתוב לפחות 3 בדיקות לכל פונקציה. חשבו על:
- מקרה רגיל (happy path)
- מקרה קצה (edge case)
- מקרה שגיאה (אם רלוונטי)

```javascript
import { describe, it, expect } from 'vitest';
import { isEven, max, average, toTitleCase, filterEven } from './math';

describe('isEven', () => {
  it('מחזיר true למספר זוגי', () => {
    expect(isEven(4)).toBe(true);
  });
  // TODO: הוסיפו עוד 2 בדיקות
});

describe('max', () => {
  // TODO: 3 בדיקות — שניים חיוביים, עם שלילי, שני שווים
});

describe('average', () => {
  // TODO: 3 בדיקות — מספרים, מערך של אחד, מערך ריק (שגיאה!)
});

describe('toTitleCase', () => {
  // TODO: 3 בדיקות — מחרוזת רגילה, מחרוזת ריקה, מילה אחת
});

describe('filterEven', () => {
  // TODO: 3 בדיקות — מערך מעורב, כולם אי-זוגיים, מערך ריק
});
```

---

## חלק 3 — הרצה ובדיקה

```bash
npm test
```

ודאו שכל הבדיקות עוברות (✓ ירוק).
אחר כך — **שברו בכוונה** פונקציה אחת וראו מה הבדיקה מציגה.

---

## בונוס

כתוב פונקציה `clamp(n, min, max)` שמחזירה את n בתחום בין min ל-max:
- `clamp(5, 1, 10)` → 5
- `clamp(-3, 1, 10)` → 1
- `clamp(15, 1, 10)` → 10

כתוב 5 בדיקות עם מקרי קצה שונים.