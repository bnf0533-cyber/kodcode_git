מבנה הפרויקט

```
├── server/
│   ├── app.js
│   ├── package.json
│   ├── .env
│   │
│   ├── config/
│   │   └── mongo.js
│   │
│   ├── routes/
│   │   └── tasks.routes.js
│   │
│   ├── controllers/
│   │   └── tasks.controller.js
│   │
│   ├── services/
│   │   └── tasks.service.js
│   │
│   └── dal/
│       └── tasks.dal.js
│
└── client/
    ├── index.html
    ├── tasks.html
    │
    ├── css/
    │   └── style.css
    │
    └── js/
        ├── api.js
        ├── index.js
        └── tasks.js
```

הרעיון לאפליקציה

אפליקציית Task Manager פשוטה.

עמוד 1 — Home
Task Manager

[ View Tasks ]

Total Tasks: 5
Completed: 2
Pending: 3

הנתונים מגיעים מהשרת.

עמוד 2 — Tasks

Tasks

[ New task input ] [Add]

עליך לבצע פעולות מול ה ־ API.

API

```
GET /api/tasks

מחזיר את כל המשימות.

[
  {
    "_id": "...",
    "title": "Learn MongoDB",
    "completed": false
  }
]
```

```
POST /api/tasks

יצירת משימה.

{
  "title": "Practice E2E"
}
```

```
PATCH /api/tasks/:id

שינוי completed.

{
  "completed": true
}
```

```
DELETE /api/tasks/:id

מחיקת משימה.
```

MongoDB

Collection:

tasks

Document:

{
\_id: ObjectId,
title: String,
completed: Boolean,
createdAt: Date
}

אין צורך ביותר מ־Collection אחד.

חלוקת האחריות

Route

רק מגדיר endpoints:

GET /api/tasks

POST /api/tasks

PATCH /api/tasks/:id

DELETE /api/tasks/:id

Controller

מטפל ב־HTTP:

req
↓
validation בסיסית
↓
service
↓
res

Service

הלוגיקה העסקית.

לדוגמה:

title ריק?
↓
error

title תקין?
↓
DAL

DAL

רק MongoDB.

לדוגמה:

findTasks()
createTask()
updateTask()
deleteTask()

Frontend

api.js

מרכז את כל הקריאות לשרת:

export async function getTasks() {}

export async function createTask(title) {}

export async function updateTask(id, completed) {}

export async function deleteTask(id) {}

כך ה־UI לא צריך לדעת איך ה־API עובד.

index.js

אחראי על Home:

GET /api/tasks
↓
calculate statistics
↓
render

tasks.js

אחראי על:

load tasks

render tasks

add task

toggle task

delete task

מה עליכם לממש

שלב 1 — לבדוק ה- Backend שעובד כמו שצריך

Express server

MongoDB

DAL

Service

Controllers

Routes

GET

POST

PATCH

DELETE

שלב 2 — Frontend

חיבור fetch ל־API

הצגת המשימות

הוספת משימה

סימון משימה כ־completed

מחיקת משימה

הצגת statistics ב־Home
