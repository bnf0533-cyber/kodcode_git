# Auth Teaching Server

Simple Express API for teaching **register**, **login**, **JWT**, **bcrypt**, and **auth middleware**.

Users are stored in memory, so a restart clears accounts. That keeps the lesson focused on auth instead of a database.

## Endpoints

| Method | Path | Auth | What it does |
| --- | --- | --- | --- |
| `POST` | `/users/register` | No | Hash password with bcrypt, save user, return JWT |
| `POST` | `/users/login` | No | Compare password with bcrypt, return JWT |
| `GET` | `/users/me` | Bearer token | Auth middleware verifies JWT, returns the current user |

## Run locally

```bash
cp .env.example .env
npm install
npm run dev
```

The server listens on port `4876` unless you change `PORT` in `.env`.

## Try the flow

Register:

```bash
curl -s -X POST http://localhost:4876/users/register \
  -H "Content-Type: application/json" \
  -d '{"email":"student@example.com","password":"password123"}'
```

Login:

```bash
curl -s -X POST http://localhost:4876/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"student@example.com","password":"password123"}'
```

Protected route (replace `TOKEN` with the JWT from register or login):

```bash
curl -s http://localhost:4876/users/me \
  -H "Authorization: Bearer TOKEN"
```

## Teaching map

Walk students through these files in order:

1. `src/validations/user.validation.js` — Zod checks email and password before the controller runs
2. `src/utils/password.js` — bcrypt hash on register, bcrypt compare on login
3. `src/utils/generateToken.js` — `jwt.sign` with `sub` and an expiration
4. `src/ctrls/user.ctrl.js` — register / login orchestration (no DB queries here)
5. `src/utils/auth.middleware.js` — read `Authorization: Bearer <token>`, `jwt.verify`, attach `req.user`
6. `src/routes/user.routes.js` — wire validation, rate limit, and middleware to endpoints

## Response shape

Success:

```json
{
  "success": true,
  "data": {}
}
```

Error:

```json
{
  "success": false,
  "message": "Error message"
}
```

Password hashes are never returned. Login uses one message for both unknown email and wrong password.
