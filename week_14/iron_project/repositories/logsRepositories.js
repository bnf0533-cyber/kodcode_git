import { pool } from "../db/db_database.js";

export async function addLogs(action, incident_id, operator_id, description) {
    try {
        const [result] = await pool.execute("insert into logs (action , incident_id , operator_id, description) values (?,?,?,?)",
            [action, incident_id, operator_id, description])
    }catch (err){
        console.error(err);
    }
}
