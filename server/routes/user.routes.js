const { Router } = require("express");
const pool = require("../database/database");
const {insertarUsuario, insertEnterprise} = require('../controllers/insertFunctions');
const {obtenerUsuario, obtenerCodigo}= require("../controllers/getFunctions");
const {modificarUsuario} = require("../controllers/modifyFunctions")
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
  
  if (response.validUser) {
    res.status(200).send({ data: response.validUser, message: 'Successfully logedIn'})
  } else {
    res.status(400).send({message: 'algo fallo a la hora de logearte comprueba correo, contraseña y recuerda que debes estar validado'})
  }
});

router.post("/verifycode", async (req, res) => {
  
  const datAlumn = req.body;
  const response = await obtenerCodigo(pool, datAlumn)

  if(response.codigo){

  await modificarUsuario(pool, datAlumn)

  }else{
    res.status(400).send({message: 'codigo no encontrado, no se pudo modificar el estatus de tu cuenta'})
  }


}) 

module.exports = router;