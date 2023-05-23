const { Router } = require("express");
const pool = require("../database/database");
const { insertarUsuario, insertEnterprise } = require('../controllers/insertFunctions');
const { verificarCodigo } = require("../controllers/modifyFunctions")
const router = Router();

router.post("/registro", async (req, res) => {
    const datAlumn = req.body;
    let response;

    if (datAlumn.type === 'alumno') {
        response = await insertarUsuario(pool, datAlumn)
    } else {
        response = await insertEnterprise(pool, datAlumn)
    }

    res.status(200).send(response)
});

router.post("/login", async (req, res) => {
    const params = req.body;

    // verificar que el formulario se mande lleno
    if (!params.email || !params.password) {
        return res.status(400).send({
            status: "error",
            message: "Faltan datos"
        });
    }

    const query = `SELECT * FROM skillup.cuenta_usuario WHERE correo = $1 AND contrasena = $2;`;
    const values = [params.email, params.password];

    try {
        const accountData = await pool.query(query, values);

        // si la consulta está vacía, el usuario no existe
        if (accountData.rows.length === 0) {
            return res.status(404).send({
                status: "Error",
                message: "Usuario o contraseña inválida"
            });
        }

        // crear el objeto de usuario
        const userData = {
            id: accountData.rows[0].id_usuario,
            email: accountData.rows[0].correo,
            rol: accountData.rows[0].tipo_usuario
        };

        return res.status(200).send(userData);
    } catch (error) {
        console.error("Error al intentar iniciar sesión:", error);
        return res.status(500).json({ error: "Error al intentar iniciar sesión" });
    }
});

router.post("/verifycode", async (req, res) => {
    const datCode = req.body;
    const response = await verificarCodigo(pool, datCode)

    res.status(200).send(response)
});

module.exports = router;