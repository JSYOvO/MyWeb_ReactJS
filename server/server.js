const fs = require('fs');
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const { POINT_CONVERSION_HYBRID } = require('constants');

const app = express();
const port = process.env.PORT || 5000;
const data = fs.readFileSync('./database.json')
const conf = JSON.parse(data);
const connection = mysql.createConnection({
    host : conf.host,
    user : conf.user,
    password : conf.password,
    port : conf.port,
    database : conf.database
})
connection.connect();

const multer = require('multer');
const upload = multer({dest : './upload'});
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


app.get('/api/todolists',(req,res) => {
    connection.query(
        "SELECT * FROM TODO_LIST",
        (err, rows, fields) => {res.send(rows);}
    )
})

app.listen(port, () => {
    console.log(`Listening port ${port}`);
})

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
    res.sendStatus(200);
    } else {
    next();
    }
};
    
app.post('/api/todolists', upload.single('image'), (req,res) => {

    let sql = 'INSERT INTO TODO_LIST VALUES (NULL,?,?,?,?)';
    
    let id = req.body.ID;
    console.log(req.body);
    let params = [req.body.job,req.body.startDate,req.body.endDate,req.body.desc];
    connection.query(sql, params,
        (err,rows,fields) => {
            res.send(rows);
        }
    )
})