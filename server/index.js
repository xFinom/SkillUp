const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require('body-parser');

// importar las variables de entorno
dotenv.config();
 
// importar las rutas
const publicationRoutes = require('./routes/publication.routes')
const studentRoutes = require('./routes/student.routes')
const companyRoutes = require('./routes/company.routes')
const userRoutes = require('./routes/user.routes')

const app = express();

// Importar el puerto desde la variable de Entorno
const port = process.env.PORT;

// Habilitar CORS para las peticiones desde el FrontEnd
app.use(cors());

// Formularios en tipo Json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Habilitar que las respuestas sean en formato JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// usar las rutas
app.use('/api/publications', publicationRoutes);
app.use('/api/user', userRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/company', companyRoutes);

app.listen(port);

console.log("escucha desde el puerto", port);