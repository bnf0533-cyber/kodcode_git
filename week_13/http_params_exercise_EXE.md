# תרגילים — פרמטרים ב-HTTP

URL params, query string, request body — שלושת הסוגים

---

## קל — תרגילים 1-3

### תרגיל 1

**הוראות:** כתוב פונקציה `extractId(url)` שמחלצת את ה-id מ-URL בסגנון `/users/42`.

**מטרה:** חילוץ URL param מ-path

function extractId(url) {

  const parts \= url.split("/");

  // /users/42 → parts \= \["","users","42"\]

  // כתוב כאן — החזר parts\[2\] כמספר

}

**פלט:**

extractId("/users/42")   →  42

extractId("/users/1")    →  1

extractId("/users")      →  NaN

---

### תרגיל 2

**הוראות:** כתוב `parseQuery(url)` שמחלצת את ה-query string ומחזירה אובייקט key-value.

**מטרה:** parse query string בסיסי

function parseQuery(url) {

  // /users?role=admin\&page=2

  const qs \= url.split("?")\[1\] || "";

  // כתוב כאן — split "&", split "="

  // החזר אובייקט {role:"admin", page:"2"}

}

**פלט:**

parseQuery("/users?role=admin\&page=2")

→  { role: "admin", page: "2" }

parseQuery("/users")

→  {}

---

### תרגיל 3

**הוראות:** השתמש ב-`new URL()` כדי לפרסר query string. חלץ `page`, `limit`, ו-`sort` עם ערכי ברירת מחדל.

**מטרה:** `new URL()` ו-`searchParams`

const { URL } \= require("url");

function getQueryParams(rawUrl) {

  const parsed \= new URL(rawUrl, "http://localhost");

  const qs \= parsed.searchParams;

  return {

    page:  // כתוב כאן — qs.get("page") || "1"

    limit: // כתוב כאן — qs.get("limit") || "10"

    sort:  // כתוב כאן

  };

}

**פלט:**

getQueryParams("/users?page=3\&sort=name")

→  { page:"3", limit:"10", sort:"name" }

---

## בינוני — תרגילים 4-7

### תרגיל 4

**הוראות:** כתוב handler שמחלץ id מה-URL, מחפש user ומחזיר תוצאה. הפרד לוגיקת חילוץ מלוגיקת חיפוש.

**מטרה:** route param — `GET /users/:id`

const users \= \[

  { id: 1, name: "Alice" },

  { id: 2, name: "Bob" },

\];

function getParam(url, pattern) {

  // /users/:id vs /users/42

  const pp \= pattern.split("/");

  const up \= url.split("/");

  const key \= pp.find(s \=\> s.startsWith(":"))?.slice(1);

  const idx \= pp.findIndex(s \=\> s.startsWith(":"));

  // כתוב כאן — החזר { \[key\]: up\[idx\] }

}

// handler:

const { id } \= getParam(url, "/users/:id");

const user   \= users.find(u \=\> u.id \=== \+id);

// כתוב כאן — send 200 or 404

**פלט:**

GET /users/1  →  200 {"id":1,"name":"Alice"}

GET /users/9  →  404 {"error":"Not found"}

---

### תרגיל 5

**הוראות:** כתוב handler ל-`GET /users` שתומך בפילטר לפי `role`, ו-pagination לפי `page` \+ `limit`.

**מטרה:** query params לפילטר \+ pagination

function handler(req, res) {

  const parsed \= new URL(req.url, "http://localhost");

  const qs \= parsed.searchParams;

  const role  \= qs.get("role");

  const page  \= \+(qs.get("page")  || 1);

  const limit \= \+(qs.get("limit") || 10);

  let result \= users;

  if (role) {

    // כתוב כאן — filter לפי role

  }

  // כתוב כאן — slice לפי page ו-limit

  sendJSON(res, 200, result);

}

**פלט:**

GET /users?role=admin     →  \[users עם role=admin\]

GET /users?page=2\&limit=1 →  \[user השני\]

GET /users                →  \[כל users\]

---

### תרגיל 6

**הוראות:** כתוב `readBody` שעוטפת קריאת stream ב-Promise. הפוך אותה ל-async/await במקום callbacks.

**מטרה:** readBody — Promise wrapper

function readBody(req) {

  return new Promise((resolve, reject) \=\> {

    const chunks \= \[\];

    req.on("data", chunk \=\> {

      // כתוב כאן — push ל-chunks

    });

    req.on("end", () \=\> {

      const raw \= Buffer.concat(chunks).toString();

      try {

        resolve(JSON.parse(raw));

      } catch {

        // כתוב כאן — resolve עם {}

      }

    });

    req.on("error", reject);

  });

}

// שימוש:

async function create(req, res) {

  const data \= await readBody(req);

  // כתוב כאן — handle data

}

**פלט:**

POST /users Body: {"name":"Carol"}

await readBody(req)  →  { name: "Carol" }

---

### תרגיל 7

**הוראות:** כתוב handler ל-`PUT /users/:id?notify=true` שמקבל body לעדכון, param ל-id, וquery ל-notify.

**מטרה:** שילוב URL param \+ query \+ body

async function updateUser(req, res) {

  // חלץ id מ-URL:

  const id \= // כתוב כאן

  // חלץ query params:

  const qs     \= new URL(req.url, "http://localhost").searchParams;

  const notify \= // כתוב כאן — qs.get("notify") \=== "true"

  // קרא body:

  const data \= await readBody(req);

  // עדכן user:

  const idx \= users.findIndex(u \=\> u.id \=== \+id);

  if (idx \=== \-1) return sendJSON(res, 404, {});

  // כתוב כאן — merge ושמור

  if (notify) console.log("User updated\!");

  sendJSON(res, 200, users\[idx\]);

}

**פלט:**

PUT /users/1?notify=true {"name":"Alicia"}

→  200 {"id":1,"name":"Alicia"}

// console: "User updated\!"

---

## קשה — תרגילים 8-10

### תרגיל 8

**הוראות:** כתוב `validateParams(id, query)` שבודקת: id חייב להיות מספר חיובי, page ≥ 1, limit בין 1-100.

**מטרה:** validation של params

function validateParams(id, query) {

  const errors \= \[\];

  if (\!id || isNaN(+id) || \+id \<= 0\)

    errors.push("id must be positive number");

  const page \= \+(query.get("page") || 1);

  if (page \< 1\)

    // כתוב כאן — הוסף error

  const limit \= \+(query.get("limit") || 10);

  if (limit \< 1 || limit \> 100\)

    // כתוב כאן

  return {

    valid: errors.length \=== 0,

    errors,

    parsed: { id: \+id, page, limit },

  };

}

**פלט:**

validateParams("abc", qs)  →  { valid:false, errors:\["id must be..."\] }

validateParams("1", qs)    →  { valid:true, parsed:{id:1,page:1,limit:10} }

---

### תרגיל 9

**הוראות:** כתוב `extractParams(pattern, url)` גנרית שתומכת בכמה params: `/users/:userId/posts/:postId`.

**מטרה:** route param עם נתיב מקונן

function extractParams(pattern, url) {

  const pp \= pattern.split("/");

  const up \= url.split("?")\[0\].split("/");

  if (pp.length \!== up.length) return null;

  const params \= {};

  for (let i \= 0; i \< pp.length; i++) {

    if (pp\[i\].startsWith(":")) {

      // כתוב כאן — הוסף key+value ל-params

    } else if (pp\[i\] \!== up\[i\]) {

      return null;

    }

  }

  return params;

}

**פלט:**

extractParams(

  "/users/:userId/posts/:postId",

  "/users/5/posts/12"

)

→  { userId: "5", postId: "12" }

---

### תרגיל 10

**הוראות:** כתוב שרת מלא שמממש `GET /users/:id?expand=posts` ו-`POST /users` עם body. השתמש בכל 3 סוגי הפרמטרים.

**מטרה:** API מלא עם 3 סוגי params

http.createServer(async (req, res) \=\> {

  const { method } \= req;

  const parsed    \= new URL(req.url, "http://localhost");

  const pathParts \= parsed.pathname.split("/");

  const resource  \= pathParts\[1\];  // "users"

  const id        \= pathParts\[2\];  // "42"

  const expand    \= parsed.searchParams.get("expand");

  // GET /users/:id?expand=posts

  if (method \=== "GET" && resource \=== "users" && id) {

    // כתוב כאן — מצא user, אם expand=posts הוסף posts שלו

  }

  // POST /users — body

  if (method \=== "POST" && resource \=== "users" && \!id) {

    const data \= await readBody(req);

    // כתוב כאן — צור user חדש

  }

  sendJSON(res, 404, { error: "Not found" });

}).listen(3000);

**פלט:**

GET /users/1              →  200 { id:1, name:"Alice" }

GET /users/1?expand=posts →  200 { id:1, ..., posts:\[...\] }

POST /users {"name":"D"}  →  201 { id:4, name:"D" }  
