const jwt = require("jwt-simple")
const moment = require("moment")

// importar clave secreta y g
import { secret, createToken } from "../services/jwt"

// Middleware 
exports.auth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).send({
            status: "error",
            message: "La petición no tiene cabecera de autenticación"
        })
    }

    // limpiar token
    let token = req.headers.authorization.replace(/['"]+/g, '')

    // Decodificar token
    try {
        let payload = jwt.decode(token, secret);

        if (payload.exp <= moment().unix()) {
            return res.status(401).send({
                status: "error",
                message: "Token expirado",
            })
        }

        req.user = payload;
    } catch (error) {
        return res.status(404).send({
            status: "error",
            message: "Token invalido",
        })
    }

    next();
}