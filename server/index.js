const express = require("express");
const dotenv = require("dotenv");

// importar las variables de entorno
dotenv.config();
 
// importar las rutas
const taskRoutes = require('./routes/skillup.routes')

const app = express();

const port = process.env.PORT;

app.use(taskRoutes)

app.listen(port);

console.log("escucha desde el puerto", port);