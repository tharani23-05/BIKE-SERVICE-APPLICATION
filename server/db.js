'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',//process.env.DB_USERNAME,
    password : '1234',//process.env.DB_PASSWORD,
    database : 'sample'
});

connection.connect(function(err) {
    if (err) throw err;
})

module.exports = connection;