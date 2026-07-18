import { pool } from "../db/db_database.js";

export async function getOpenIncidents() {
    try {
        const [result] = await pool.execute("select * from incidents where status != 'CLOSED'")
        return result
    }catch (err) {
        console.error(err);
    }
}
