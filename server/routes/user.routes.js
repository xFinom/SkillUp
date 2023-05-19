const { Router } = require("express");
const pool = require("../database/database");
const insertUser = require('../utils/insertFunctions')
const router = Router();



router.post("/registro", async (req, res) => {
    const datAlumn =req.body;
    const response = insertUser(pool, datAlumn)
    res.status(200).send(response)
  });

router.post("/Login", async (req, res) => {
  const datAlumn =req.body;
  res.status(200).send({ data: datAlumn, message: 'Successfully logedIn'})
});

module.exports = router;