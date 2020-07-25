const express = require('express');
const mysql = require('mysql');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const connection = mysql.createConnection({
    host : conf.host,
    user : conf.user,
    password : conf.password,
    port : conf.port,
    database : conf.database
})
connection.connect();

app.get('/api/todolists',(req,res) => {
    connection.query(
        "SELECT * FROM TODO_LIST",
        (err, rows, fields) => {res.send(rows);}
    )
})

app.listen(port, () => {
    console.log(`Listening port ${port}`);
})
