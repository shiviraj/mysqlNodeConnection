const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: process.env.DB_NAME,
});

const createTable = `create table if not exists user(
  id int primary key auto_increment,
  name varchar(255)not null
)`;
con.connect();
con.query(createTable);

const promisify = (funcName) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      funcName(...args, (error, result) => {
        if (error) reject(error);
        resolve(result);
      });
    });
  };
};

con.query = promisify(con.query.bind(con));

module.exports = con;
