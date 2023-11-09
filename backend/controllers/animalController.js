const asyncHandler = require("express-async-handler");
const Animal = require("../models/animalModel");

const getBasicAnimalInfo = asyncHandler(async (req, res) => {
  const animals = await Animal.find(
    {},
    { name: 1, age: 1, gender: 1, breed: 1, photos: { $slice: 1 } }
  );
  res.status(200).json(animals);
});

const getAnimalById = asyncHandler(async (req, res) => {
  const animal = await Animal.findById(req.params.id);
  if (!animal) {
    res.status(404);
    throw new Error("Animal not found.");
  }
  res.status(200).json(animal);
});

const createAnimal = asyncHandler(async (req, res) => {
  const {
    name,
    age,
    breed,
    gender,
    photos,
    about,
    info,
    vaccinated,
    neutered,
  } = req.body;
  if (!name || !age || !breed || !gender || !photos) {
    res.status(400);
    throw new Error("Please provide all required fields.");
  }
  const animal = await Animal.create({
    name,
    age,
    breed,
    gender,
    photos,
    about,
    info,
    vaccinated,
    neutered,
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
  getBasicAnimalInfo,
  getAnimalById,
  createAnimal,
  updateAnimal,
  deleteAnimal,
};
