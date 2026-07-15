import mysql2 from "mysql2/promise";

// חיבור של דוקר לדאטה בייס

export const pool = mysql2.createPool({
    host: "localhost", 
    port: 3306, 
    user: "root",
    database: "my_db",
    connectionLimit: 10,
})
