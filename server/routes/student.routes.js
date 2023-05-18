const { Router } = require("express");
const {register}  = require("../controllers/student.controller")

const router = Router();

router.get("/register", register);

module.exports = router;