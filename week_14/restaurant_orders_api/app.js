import express from 'express'
import router from './routes/router.js'
import { logger } from './middlewares/logger.js'
import { errorHandler } from './middlewares/errorHandler.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(logger)

app.use('/', router)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})