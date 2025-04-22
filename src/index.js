const express = require('express');
const connectDB = require('./db');
const Message = require('./message.model');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Conexión a MongoDB
connectDB();

// GET: obtener mensajes
app.get('/core', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener mensajes' });
  }
});

// POST: crear mensaje
app.post('/core', async (req, res) => {
  try {
    const { content } = req.body;
    const message = await Message.create({ content });
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ error: 'Error al guardar mensaje' });
  }
});

app.listen(PORT, () => {
  console.log(`Core API corriendo en puerto ${PORT}`);
});
