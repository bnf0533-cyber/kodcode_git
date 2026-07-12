# תרגילים — Express

routing, middleware, error handling, REST

---

## קל — תרגילים 1-3

### תרגיל 1

**הוראות:** כתוב Express app עם route אחד: GET / שמחזיר "Hello, World\!".

**מטרה:** Express app בסיסית

**קלט:**

const express \= require("express");

const app \= express();

app.get("/", (req, res) \=\> {

  // כתוב כאן

});

app.listen(3000, () \=\> console.log("Server running on port 3000"));

**פלט:**

GET /  →  200 "Hello, World\!"

---

### תרגיל 2

**הוראות:** כתוב route שמקבל userId כ-URL parameter ומחזיר נתוני user.

**מטרה:** route parameters

**קלט:**

const users \= { 1: {name:"Alice"}, 2: {name:"Bob"} };

app.get("/users/:id", (req, res) \=\> {

  const id   \= parseInt(req.params.id);

  const user \= users\[id\];

  // כתוב כאן — 404 אם לא קיים, 200 עם user אם קיים

});

**פלט:**

GET /users/1   →  200 {name:"Alice"}

GET /users/99  →  404 {error:"User not found"}

---

### תרגיל 3

**הוראות:** כתוב middleware שמדפיס לconsole את method, url, וזמן כל request.

**מטרה:** middleware לוגים

**קלט:**

function logger(req, res, next) {

  const start \= Date.now();

  res.on("finish", () \=\> {

    // כתוב כאן — הדפס method, url, status, זמן

  });

  next();

}

app.use(logger);

**פלט:**

GET /users → 200 OK (12ms)

POST /users → 201 Created (45ms)

---

## בינוני — תרגילים 4-7

### תרגיל 4

**הוראות:** צור router נפרד לusers ו-products. חבר ל-main app.

**מטרה:** Express Router

**קלט:**

// routes/users.js

const router \= require("express").Router();

router.get("/",    (req, res) \=\> { /\* כתוב כאן \*/ });

router.post("/",   (req, res) \=\> { /\* כתוב כאן \*/ });

router.delete("/:id", (req, res) \=\> { /\* כתוב כאן \*/ });

module.exports \= router;

// app.js

app.use("/api/users",    require("./routes/users"));

app.use("/api/products", require("./routes/products"));

**פלט:**

GET /api/users      →  \[\]

POST /api/users     →  {id:1,...}

DELETE /api/users/1 →  204

---

### תרגיל 5

**הוראות:** כתוב middleware שבודק ש-body של POST /users מכיל name ו-email.

**מטרה:** validation middleware

**קלט:**

function validateUser(req, res, next) {

  const { name, email } \= req.body;

  const errors \= \[\];

  if (\!name)  errors.push("name is required");

  if (\!email) errors.push("email is required");

  // כתוב כאן — אם יש errors החזר 400, אחרת next()

}

app.post("/users", validateUser, (req, res) \=\> {

  res.status(201).json({ id: 1, ...req.body });

});

**פלט:**

POST /users {}           →  400 {errors:\["name is required","email is required"\]}

POST /users {name,email} →  201 {id:1,name,email}

---

### תרגיל 6

**הוראות:** כתוב error handling middleware מרכזי שתופס כל שגיאה.

**מטרה:** error handling middleware

**קלט:**

// error middleware — 4 פרמטרים\!

app.use((err, req, res, next) \=\> {

  const status \= err.statusCode || 500;

  const msg    \= err.isOperational ? err.message : "Internal Server Error";

  // כתוב כאן — res.status(status).json({})

});

// asyncHandler wrapper:

const asyncHandler \= fn \=\> (req, res, next) \=\>

  Promise.resolve(fn(req, res, next)).catch(next);

**פלט:**

שגיאה רגילה → 500 {error:"Internal Server Error"}

NotFoundError → 404 {error:"User not found"}

---

### תרגיל 7

**הוראות:** הגדר Express לשרת קבצים סטטיים מתיקיית public. הוסף route לדף index.

**מטרה:** static files ו-express.static

**קלט:**

app.use(express.static("public"));

app.use(express.json());

// כל בקשה שלא נמצא route → שלח index.html:

app.get("\*", (req, res) \=\> {

  // כתוב כאן

});

**פלט:**

GET /            →  public/index.html

GET /style.css   →  public/style.css

GET /api/users   →  \[\] (עמד ב-route API)

---

## קשה — תרגילים 8-10

### תרגיל 8

**הוראות:** כתוב middleware שבודק JWT token בheader Authorization. (jwt.verify — preview; JWT יילמד לעומק בתרגיל 73\)

**מטרה:** JWT authentication middleware

**קלט:**

const jwt \= require("jsonwebtoken");

function authenticate(req, res, next) {

  const authHeader \= req.headers.authorization;

  if (\!authHeader?.startsWith("Bearer ")) {

    return res.status(401).json({ error: "No token" });

  }

  const token \= authHeader.split(" ")\[1\];

  try {

    const payload \= jwt.verify(token, process.env.JWT\_SECRET);

    req.user \= payload;

    // כתוב כאן — next()

  } catch (err) {

    // כתוב כאן — 401

  }

}

**פלט:**

GET /profile (no token)      →  401 {error:"No token"}

GET /profile (valid token)   →  200 {name:"Alice"}

GET /profile (expired token) →  401 {error:"Token expired"}

---

### תרגיל 9

**הוראות:** כתוב rate limiter שמגביל כל IP ל-100 בקשות ל-15 דקות.

**מטרה:** rate limiting middleware

**קלט:**

function createRateLimit(max, windowMs) {

  const store \= new Map(); // ip → { count, resetAt }

  return (req, res, next) \=\> {

    const ip  \= req.ip;

    const now \= Date.now();

    const entry \= store.get(ip) || { count: 0, resetAt: now \+ windowMs };

    if (now \> entry.resetAt) {

      entry.count   \= 0;

      entry.resetAt \= now \+ windowMs;

    }

    entry.count++;

    store.set(ip, entry);

    // כתוב כאן — אם count \> max החזר 429

    next();

  };

}

**פלט:**

// בקשה 101 מאותו IP:

→  429 Too Many Requests

   Retry-After: 847  // שניות עד reset

---

### תרגיל 10

**הוראות:** כתוב Express app מלא: Router, validation, authentication, error handling, ו-async wrapper.

**מטרה:** full REST API עם כל השכבות

**קלט:**

// app.js

const app \= express();

app.use(express.json());

app.use(logger);

app.use("/api/v1/users", authenticate, usersRouter);

app.use(errorHandler);

// routes/users.js

router.get("/",     asyncHandler(getUsers));

router.post("/",    validateUser, asyncHandler(createUser));

router.get("/:id",  asyncHandler(getUserById));

router.put("/:id",  validateUser, asyncHandler(updateUser));

router.delete("/:id", asyncHandler(deleteUser));

// כתוב את getUsers, createUser, getUserById, updateUser, deleteUser

**פלט:**

// CRUD מלא עם JWT, validation, error handling, ולוגים

---

