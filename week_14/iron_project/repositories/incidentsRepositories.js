import { pool } from "../db/db_database.js";

export async function getOpenIncidents() {
    try {
        const [result] = await pool.execute("select * from incidents where status != 'CLOSED'")
        return result
    }catch (err) {
        console.error(err);
    }
}

export async function createIncident(codeName, threatLevel, operatorId) {
    try {
        const [query] = await pool.execute("insert into incidents (code_name , threat_level ,operator_id) values (?,?,?)", [codeName, threatLevel, operatorId])
        return {
            id :query.insertId,
            codeName,
            threatLevel,
            operatorId,
            status :"OPEN"
        }
    } catch (err) {
        console.error(err);
    }
}

export async function updateIncidentStatus(status, id) {
    try {
        const query = await pool.execute("update incidents set status = ? where id = ?", [status, id])
        return query
    } catch (err) {
        console.error(err);
    }
}