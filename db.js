var mysql      = require('mysql');
var connection = mysql.createConnection({
  //host     : '47.254.230.230',
  host     : 'localhost',
  user     : 'root',
  port     : 33006,
  password : 'r00t@tngdigital.com.my',
  database : 'www'
});

connection.connect();