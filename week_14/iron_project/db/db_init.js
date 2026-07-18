import { pool } from "./db_database.js";
import fs from "fs/promises";

export const createTables = async () => {
    try {
        const readTablesFile = await fs.readFile("./db/create_tables.sql", "utf-8")
        const queries = readTablesFile
            // מחלק לפי נקודה פסיק
            .split(";")
            // מנקה רווחים וירידות שורה
            .map(q => q.trim())
            // מנקה מחרוזות ריקות
            .filter(q => q.length > 0)
        for (const query of queries) {
            await pool.query(query)
        }
        console.log("database tables initialized from sql file successfully.");
    } catch (err) {
        console.error("Failed to initialize database tables from SQL file: ", err);
        // סוגר את החיבור שלא ישאר פתוח
        process.exit(1)
    }
}