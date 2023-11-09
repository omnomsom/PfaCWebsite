const express = require("express");
const router = express.Router();
const {
  getBasicAnimalInfo,
  getAnimalById,
  updateAnimal,
  deleteAnimal,
  createAnimal,
} = require("../controllers/animalController");

router.get("/", getBasicAnimalInfo);
router.get("/:id", getAnimalById);

router.post("/", createAnimal);

router.put("/:id", updateAnimal);

router.delete("/:id", deleteAnimal);

module.exports = router;
