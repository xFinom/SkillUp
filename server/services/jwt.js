const jwt = require("jwt-simple");
const moment = require("moment");

// Clave secreta
const secret = "CLAVE_SECRETA_PROYECT_SkillUP_6";

const createToken = (user) => {
    const payload = {
        id: user.id,
        name: user.name,
        email: user.emal,
        imagen: user.image,
        role: user.role,
        iat: moment().unix(),
        exp: moment().add(30, "days").unix()
    }

    return jwt.encode(payload, secret);
}

module.exports = {
    secret,
    createToken
}