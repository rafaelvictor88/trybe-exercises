const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '050316br',
  database: 'mvc_example'});

module.exports = connection;