import express from "express"
import { use } from "react"

const app = express()

app.use((req , res , next) => {
    console.log(req.url , res.method , new Date());
    next( )
})

