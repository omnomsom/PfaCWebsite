const asyncHandler = require("express-async-handler");
const Animal = require("../models/animalModel");

const getAnimals = asyncHandler(async (req, res) => {
  const animals = await Animal.find();
  res.status(200).json(animals);
});

const createAnimal = asyncHandler(async (req, res) => {
  const { name, age, breed, gender, photo } = req.body;

  if (!name || !age || !breed || !gender || !photo) {
    res.status(400);
    throw new Error("Please provide all required fields.");
  }

  const animal = await Animal.create({
    name,
    age,
    breed,
    gender,
    photo,
  });

  res.status(201).json(animal);
});

const updateAnimal = asyncHandler(async (req, res) => {
  const animal = await Animal.findById(req.params.id);

  if (!animal) {
    res.status(400);
    throw new Error("Animal not found.");
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
    res.status(400);
    throw new Error("Animal not found.");
  }

  await animal.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAnimals,
  createAnimal,
  updateAnimal,
  deleteAnimal,
};
