import express, { json } from "express"
import mysql from "mysql2/promise"
const app = express();

app.use(express.json());

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "todo_db",
    connectionLimit: 10,
});

// await pool.execute(`CREATE TABLE if not exists tasks (
// id INT AUTO_INCREMENT PRIMARY KEY,
// title VARCHAR(200) NOT NULL,
// done BOOLEAN DEFAULT false,
// created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );`)

// pool.execute(`
//     INSERT INTO tasks (title, done) 
//     VALUES 
//         ('Buy milk', false),
//         ('Finish exercise', true)
// `);



app.get("/tasks", async (req, res) => {
    const {done} = req.query
    if (done === "true"){
        const [rows] = await pool.execute("select * from tasks where done = true")
        res.json(rows)
    }else if (done === "false") {
        const [rows] = await pool.execute("select * from tasks where done = false")
        res.json(rows)

    }else {
        const [rows] = await pool.execute("select * from tasks")
        res.json(rows)
    }

})


app.post("/tasks", async (req, res) => {
    const { title } = req.body
    const [rows] = await pool.execute("insert into tasks (title) values (?)", [title])
    res.json(rows.insertId)
})

app.put("/tasks/:id", async (req, res) => {
    const { id } = req.params
    const [rows] = await pool.execute("update tasks set done = true where id = (?)", [id])
    console.log(rows);
    res.json(rows.affectedRows)
})

app.delete("/tasks/:id", async (req, res) => {
    const { id } = req.params
    const [rows] = await pool.execute("delete from tasks where id = (?)", [id])
    console.log(rows);
    res.json(`{deleted : ${rows.insertId}}`)
})


app.listen(3000, () => console.log('port 3000'));

