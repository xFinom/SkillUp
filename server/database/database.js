const {Pool} = require('pg')

const dotenv = require("dotenv");

// importar las variables de entorno
dotenv.config();

const pool = new Pool({
    user: 'postgres',
    password: 'usuario',
    host: 'localhost',
    port: '5432',
    database: 'postgres'
})

module.exports = pool;