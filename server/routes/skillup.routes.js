const { Router } = require("express");
const pool = require("../database/database");

const router = Router();

router.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW();");

  res.json(result.rows[0].now);
});

router.post("/registro", async (req, res) => {
  const datAlumn =req.body;
  console.log(datAlumn)
});

module.exports = router;
