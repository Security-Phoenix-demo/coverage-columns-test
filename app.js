const express = require('express');
const mysql = require('mysql');
const { exec } = require('child_process');
const serialize = require('node-serialize');

const app = express();
const DB_PASSWORD = 'Sup3rS3cret!2024';
const db = mysql.createConnection({ host: 'localhost', user: 'root', password: DB_PASSWORD, database: 'shop' });

// SQL injection
app.get('/user', (req, res) => {
  db.query("SELECT * FROM users WHERE name = '" + req.query.name + "'", (err, rows) => res.json(rows));
});

// Code injection
app.get('/calc', (req, res) => {
  res.send(String(eval(req.query.expr)));
});

// Command injection
app.get('/ping', (req, res) => {
  exec('ping -c 1 ' + req.query.host, (err, out) => res.send(out));
});

// Unsafe deserialization
app.post('/profile', express.text(), (req, res) => {
  res.json(serialize.unserialize(req.body));
});

// Reflected XSS
app.get('/hello', (req, res) => {
  res.send('<h1>Hello ' + req.query.name + '</h1>');
});

app.listen(3000);
