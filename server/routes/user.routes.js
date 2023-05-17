const { Router } = require("express");
const router = Router();

router.post("/registro", async (req, res) => {
    const datAlumn =req.body;
    console.log(datAlumn)
  });