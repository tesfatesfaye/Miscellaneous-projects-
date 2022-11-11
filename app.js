const express = require('express');
const mysql= require('mysql');
const app = express();
app.set("view engine", "ejs");

app.get( function(req, res){
    res.send("HELLO FROM OUR WEB APP!");
});

app.listen(3300, function () {
    console.log('App listening on port 2000!');
});

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1519",
    database : 'webappone'
});
const a = 'SELECT count(*) FROM users ';
con.query(a, function (error, results, fields) {
    if (error) throw error;
    console.log(results);
});
app.get( function(req, res){
    var q = 'SELECT COUNT(*) as count FROM users';
    con.query(q, function (error, results) {
        if (error) throw error;
        var count=results[0].count;
      res.render("home", {count:count});
        console.log('App listening on port 2000!');

    });
    app.post('/register', function(req,res){
        var person = {email: req.body.email};
        con.query('INSERT INTO users SET ?', person, function(err, result) {
            console.log(err);
            console.log(result);
            res.redirect("/");
        });
    });




});
