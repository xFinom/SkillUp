const {Pool} = require('pg')

const dotenv = require("dotenv");

// importar las variables de entorno
dotenv.config();

const pool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE
})

module.exports = pool;