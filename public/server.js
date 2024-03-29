// app.js
const express = require('express');
const app = express();
const cors = require('cors');
const { pool } = require('../Database/db');
const router = express.Router();

// Middleware
app.use(express.json());
app.use(cors());

router.get('/holamundo', async (req, res) => {
  try {
    // Aquí va tu lógica para manejar la solicitud '/holamundo'
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).send('Error connecting to the database');
  }
});

router.get('/db/mensajes', async (req, res) => {
  try {
      const [rows] = await pool.query('SELECT * FROM Mensajes');
      res.send(rows);
  } catch (error) {
      console.error('Error:', error);
      res.status(500).send(error);
  }
});

module.exports = app;
