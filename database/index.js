const mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'django',
  database: 'ReviewDB'
});


db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

module.exports = db;

// https://www.npmjs.com/package/mysql

// TODO: establish connection