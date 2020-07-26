const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
});

connection.connect();
connection.query(`create database if not exists ${process.env.DB_NAME};`);
connection.end();
