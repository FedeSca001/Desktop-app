const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

// Crear y exportar pool como un objeto por defecto
const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


module.exports = pool;
