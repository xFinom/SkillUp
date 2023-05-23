const { Router } = require("express");
const pool = require("../database/database");
const {insertarUsuario, insertEnterprise} = require('../controllers/insertFunctions');
const {obtenerUsuario}= require("../controllers/getFunctions");
const {verificarCodigo} = require("../controllers/modifyFunctions")
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

router.post("/Login", async (req, res) => {
  const datAlumn = req.body;
  const response = await obtenerUsuario(pool, datAlumn)
  
  if (response.res) {
    res.status(200).send({ data: response.validUser, message: 'Successfully logedIn'})
  } else {
    res.status(400).send({message: 'algo fallo a la hora de logearte comprueba correo, contraseña y recuerda que debes estar validado'})
  }
});

router.post("/verifycode", async (req, res) => {
  const datCode = req.body;
  const response= await verificarCodigo(pool, datCode)
  
  res.status(200).send(response)
});
  

module.exports = router;