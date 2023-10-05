const express = require("express");
const router = express.Router();
const {
  getAnimals,
  updateAnimal,
  deleteAnimal,
  createAnimal,
} = require("../controllers/animalController");

router.get("/", getAnimals);

router.post("/", createAnimal);

router.put("/:id", updateAnimal);

router.delete("/:id", deleteAnimal);

module.exports = router;
