const con = require('../../src/createTable');

const createTable = `create table if not exists user(
  id int primary key auto_increment,
  name varchar(255)not null
)`;

const insertData = `insert into user(name) values('shiviraj')`;

const setupDatabase = async () => {
  await con.query(createTable);
  await con.query(insertData);
};

const cleanupDatabase = async () => {
  await con.query(`drop table if exists user`);
};

module.exports = { setupDatabase, cleanupDatabase };
