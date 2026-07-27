# Mongo Express Products — Student Starter (TODO)

Unit-test the **service layer** with a mocked repo (no MongoDB, no Express).

## Setup

```bash
npm install
cp .env.example .env
# edit .env with your MONGO_URL (only needed for npm start)
```

| Mode | Command | DB |
|------|---------|-----|
| Unit tests | `npm test` | **mocked** repos |
| App | `npm start` | real MongoDB (`db/mongoDB.js`) |

## Layers

```
routs/           HTTP (Express)
services/        business logic  ← unit tests target this
db/*Repo.js      productRepo / userRepo / userProductRepo (mocked in tests)
db/mongoDB.js    real Mongo (npm start only)
```

## Entities

| Entity | Fields | Connects |
|--------|--------|----------|
| Product | `name`, `price`, `category`, `instock` | — |
| User | `name`, `email`, `age` | — |
| UserProduct | `userId`, `productId` | User ↔ Product |

## Goal

1. Fill in every `TODO` in:
   - `services/productService.js`
   - `services/userService.js`
   - `services/userProductService.js`
   - `db/mongoDB.js` (for `npm start`)
   - `routs/` (wire remaining endpoints to services)
2. Run unit tests:

```bash
npm test
```

3. Check coverage:

```bash
npm run test:coverage
```

## What the tests expect

Tests call **service functions** directly and mock the repo — they never connect to MongoDB.

| Service | Method | Result |
|---------|--------|--------|
| `productService` | `createProduct(body)` | product with `_id` |
| `userService` | `createUser(body)` | user with `_id` |
| `userProductService` | `createUserProduct({ userId, productId })` | userProduct with `_id` |

More cases are listed as `it.todo(...)` — implement the service method, then replace the todo with a real test.

Do **not** change the passing tests — only implement the app code.
