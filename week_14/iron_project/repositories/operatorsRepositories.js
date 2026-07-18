import { pool } from "../db/db_database.js";


export async function createOperator(name, rank) {
    try {
        const [query] = await pool.execute("insert into operators (name , `rank`) values (?,?)", [name, rank])
        return {
            id: query.insertId,
            name,
            rank
        }
    } catch (err) {
        console.error(err);
    }
}

export async function getOperatorById(id) {
    try {
        const [query] = await pool.execute("select * from operators where id = (?)", [id])
        return query[0]
    }catch (err) {
        console.error(err);
    }
}