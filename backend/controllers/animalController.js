const asyncHandler = require("express-async-handler");

const getAnimals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Got animals!",
  });
});

const setAnimal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Set animals!",
  });
});

const updateAnimal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Updated animal ${req.params.id}!`,
  });
});

const deleteAnimal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Deleted animal ${req.params.id}!`,
  });
});

module.exports = {
  getAnimals,
  setAnimal,
  updateAnimal,
  deleteAnimal,
};
