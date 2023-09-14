const asyncHandler = require("express-async-handler");
const Animal = require("../models/animalModel");

const getAnimals = asyncHandler(async (req, res) => {
  const animals = await Animal.find();
  res.status(200).json(animals);
});

const setAnimal = asyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const animal = await Animal.create({
      name: req.body.name,
    });
    res.status(200).json(animal);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the animal." });
  }
});

const updateAnimal = asyncHandler(async (req, res) => {
  const animal = await Animal.findById(req.params.id);

  if (!animal) {
    res.status(400).json({ error: "Animal not found" });
  }

  const updatedAnimal = await Animal.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedAnimal);
});

const deleteAnimal = asyncHandler(async (req, res) => {
  const animal = await Animal.findById(req.params.id);

  if (!animal) {
    res.status(400).json({ error: "Animal not found" });
  }
  await animal.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAnimals,
  setAnimal,
  updateAnimal,
  deleteAnimal,
};
