const express = require('express');
const mysql= require('mysql');
const app = express();

app.get( function(req, res){
    res.send("HELLO FROM OUR WEB APP!");
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1519",
    database : 'webappone'
});

