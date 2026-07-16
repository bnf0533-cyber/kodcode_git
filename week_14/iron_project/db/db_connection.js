import mysql from "mysql2/promise"
const DB_HOST= process.env.DB_HOST
const DB_PORT= process.env.DB_PORT
const DB_USER= process.env.DB_USER
const DB_NAME= process.env.DB_NAME

export const pool = mysql.createPool({
    host : DB_HOST,
    port : DB_PORT,
    user : DB_USER,
    database : DB_NAME,
    connectionLimit : 10
})
