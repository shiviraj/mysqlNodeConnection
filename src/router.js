const express = require('express');
const con = require('./createTable');
const app = express();

app.post('/addUser/:name', (req, res) => {
  con.query(`insert into user(name) values('${req.params.name}')`);
  res.send();
});

app.get('/user/:id', async (req, res) => {
  try {
    const query = `select * from user where id = ?`;
    const [row] = await con.query(query, [req.params.id]);
    res.send(row);
  } catch (error) {
    res.status(500).end();
  }
});

module.exports = app;
