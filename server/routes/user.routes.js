const { Router } = require("express");
const pool = require("../database/database");
const {insertarUsuario, insertEnterprise} = require('../utils/insertFunctions');
const obtenerUsuario = require("../utils/getFunctions");
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
  
  if (response.userName) {
    res.status(200).send({ data: response.userName, message: 'Successfully logedIn'})
  } else {
    res.status(400).send({message: 'Invalid user or password'})
  }
});

module.exports = router;