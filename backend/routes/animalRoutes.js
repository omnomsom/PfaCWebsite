const express = require("express");
const router = express.Router();
const {
  getAnimals,
  updateAnimal,
  deleteAnimal,
  setAnimal,
} = require("../controllers/animalController");

router.get("/", getAnimals);

router.post("/", setAnimal);

router.put("/:id", updateAnimal);

router.delete("/:id", deleteAnimal);

module.exports = router;
