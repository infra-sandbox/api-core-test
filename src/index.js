const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/core', (req, res) => {
  res.json({ message: 'Hola desde Core API' });
});

app.listen(PORT, () => {
  console.log(`Core API corriendo en puerto ${PORT}`);
});