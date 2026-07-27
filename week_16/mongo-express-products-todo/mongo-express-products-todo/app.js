import express from 'express'
import 'dotenv/config'
import { productRouter } from './routes/productRouter.js'
import { userRouter } from './routes/userRouter.js'
import { userProductRouter } from './routes/userProductRouter.js'
import { getConnectMongo } from './db/mongoDB.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/', productRouter)
app.use('/', userRouter)
app.use('/', userProductRouter)

getConnectMongo().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
})
