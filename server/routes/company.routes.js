const { Router } = require("express");
const {searchProfile, getAllCompanies}  = require("../controllers/company.controller")

const router = Router();

router.get("/profile/:id", searchProfile);
router.get("/", getAllCompanies);

module.exports = router;