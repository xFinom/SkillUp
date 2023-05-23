const { Router } = require("express");
const {
  getAllPublications,
  getPublicationById,
  searchPublication,
  filterPublications,
  searchAndFilterPublications,
  createPublication
} = require("../controllers/publication.controller");

const router = Router();

router.get("/", getAllPublications);
router.get("/search", searchPublication);
router.get("/page/:id", getPublicationById);
router.get("/filter", filterPublications);
router.get("/searchAndFilter", searchAndFilterPublications);

router.post("/create", createPublication);

module.exports = router;
