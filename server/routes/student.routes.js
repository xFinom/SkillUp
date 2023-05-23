const { Router } = require("express");
const {searchProfile, getAllStudents}  = require("../controllers/student.controller")

const router = Router();

router.get("/profile/:id", searchProfile);
router.get("/", getAllStudents);

module.exports = router;