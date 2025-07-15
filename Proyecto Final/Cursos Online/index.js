const express = require('express');
const conectarDB = require('./config/db');
const app = express();

app.use(express.json());
conectarDB();

app.use('/api/matriculas', require('./routes/matriculaRoutes'));
app.use('/api/estudiantes', require('./routes/estudianteRoutes'));
app.use('/api/cursos', require('./routes/cursoRoutes'));

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));