const { Router } = require("express");
const { searchProfile, getAllStudents }  = require("../controllers/student.controller")

const router = Router();

router.get("/", getAllStudents);
router.get("/:id", searchProfile);

module.exports = router;
