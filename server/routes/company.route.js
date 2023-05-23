const { Router } = require("express");
const {
  getCompaniesByState,
  verificarEmpresa,
  getCompaniesByStateVerified,
} = require("../controllers/company.controller");

const router = Router();

router.get("/verify", getCompaniesByState);
router.post("/verify", verificarEmpresa);
router.patch("/verify/:id", getCompaniesByState);
router.get("/verified", getCompaniesByStateVerified);

module.exports = router;
