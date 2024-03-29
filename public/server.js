// server.js
const express = require('express');
const app = express();
const cors = require('cors');
const { pool } = require('../Database/db');

// Middleware
const router = express.Router();
app.use(express.json());
app.use(cors());

router.get('/holamundo', async (req, res) => {
  try {
    res.send('Hola mundo')
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).send('Error connecting to the database');
  }
});

router.get('/db/usuarios', async (req, res) => {
  try {
      const [rows] = await pool.promise().query('SELECT * FROM Usuarios'); // Usa pool.promise().query() en lugar de pool.query()
      res.send(rows);
  } catch (error) {
      console.error('Error:', error);
      res.status(500).send(error);
  }
});


// Registra las rutas
app.use('/', router);

const port = process.env.PORT || 5000;

// Inicia el servidor Express
app.listen(port, () => {
  console.log("Servidor conectado en el puerto " + port);
});

//module.exports = app;
