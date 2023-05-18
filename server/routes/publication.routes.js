const { Router } = require("express");
const {
  getAllPublications,
  getPublicationById,
  searchPublication,
  filterPublications,
} = require("../controllers/publication.controller");

const router = Router();

router.get("/publications", getAllPublications);
router.get("/publications/search", searchPublication);
router.get("/publication/:id", getPublicationById);
router.get("/publications/filter", filterPublications);

module.exports = router;
