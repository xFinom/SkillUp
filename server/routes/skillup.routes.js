const { Router } = require("express");
const pool = require("../database/database");

const router = Router();

router.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW();");

  res.json(result.rows[0].now);
});

module.exports = router;
