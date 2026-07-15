import { pool } from "../db/db_soldier.js";

export async function insertToDb(body) {
    try {
        const { name, role, unit, age } = body
        const [response] = await pool.execute(
            `insert into soldiers
            (name , role , unit , age)
            values (?,?,?,?)`,
            [name, role, unit, age])
        const currentSoldier = response.insertId
        return getById(currentSoldier)
    } catch (err) {
        console.log(err);
        throw err
    }
}

export async function getById(id) {
    try {
        const [soldier] = await pool.execute("select * from soldiers where id = ?", [id])
        return soldier[0]
    } catch (err) {
        console.log(err);
        throw err
    }
}

export async function getUserByQuery(unit, role, status) {

    try {
        let queryString = "select * from soldiers where 1 = 1"
        const queryValues = []
        if (unit) {
            queryString += " and unit = ?"
            queryValues.push(unit)
        } if (role) {
            queryString += " and role = ?"
            queryValues.push(role)
        } if (status) {
            queryString += " and status = ?"

            queryValues.push(status)
        }
        const [response] = await pool.execute(queryString, queryValues)
        return response
    } catch (err) {
        console.log(err);
        throw err
    }
}

export async function updateSoldier(name, role, unit, age, status, id) {
    try {
        const [response] = await pool.execute("UPDATE soldiers SET name = ?, role = ?, unit = ?, age = ?, status = ? WHERE id = ?", [name, role, unit, age, status, id])
        const getSoldier = await getById(id)
        return getSoldier
    } catch (err) {
        console.log(err);
        throw err
    }
}

export async function deleteSoldierById(id) {
    try {
        const [response] = await pool.execute("delete from soldiers where id = (?)", [id])
        return response
    } catch (err) {
        console.log(err);
        throw err
    }
}

export async function updateStatusById(status, id) {
    try {
        const response = await pool.execute("UPDATE soldiers SET status = ? WHERE id = ?", [status, id])
        return await getById(id)
    } catch (err) {
        console.log(err);
        throw err
    }
}

export async function getSoldierById(id) {
    try {
        const getSoldierById = await getById(id)
        return getSoldierById
    } catch (err) {
        console.log(err);
        throw err
    }
}