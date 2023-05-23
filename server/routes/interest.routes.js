const { Router } = require("express");
const {searchInterestAndFilter,showInterest}  = require("../controllers/interest.controller")

const router = Router();

router.get("/searchAndFilter", searchInterestAndFilter);

router.post("/showInterest", showInterest)

module.exports = router;