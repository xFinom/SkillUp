const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// importar las variables de entorno
dotenv.config();
 
// importar las rutas
const publicationRoutes = require('./routes/publication.routes')
const studentRoutes = require('./routes/student.routes')
const VerifyRoutes = require('./routes/company.route')



const app = express();

// Importar el puerto desde la variable de Entorno
const port = process.env.PORT;

// Habilitar CORS para las peticiones desde el FrontEnd
app.use(cors());

// Habilitar que las respuestas sean en formato JSON
app.use(express.json());

// usar las rutas
// usar las rutas
app.use('/api/publications', publicationRoutes);
app.use('/api/student', studentRoutes);
app.use('/api', VerifyRoutes);

app.listen(port);

console.log("escucha desde el puerto", port);
