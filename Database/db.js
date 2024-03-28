// db.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'chat_app',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;