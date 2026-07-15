import mysql from "mysql2/promise"

export const pool = mysql.createPool({
    host: "127.0.0.1",
    database: "todo_db",
    user: "root",
    connectionLimit: 10,
})

export async function createTable() {
    try {
        await pool.execute(
            `create table if not exists soldiers
    (id int primary key auto_increment,
    name varchar(30) not null,
    role varchar(30) not null,
    unit varchar (30) not null,
    age int not null,
    status varchar(20) default 'active',
    create_at timestamp default current_timestamp)`)
    }catch (e) {
        console.log(e);

    }}