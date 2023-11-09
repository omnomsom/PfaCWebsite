const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  photos: [
    {
      type: String, // Array of strings to store photo URLs
      required: true,
    },
  ],
  about: {
    type: String,
    default: "No information available about the animal.",
  },
  info: {
    type: String,
    default: "No additional information available.",
  },
  vaccinated: {
    type: Boolean,
    default: false,
  },
  neutered: {
    type: Boolean,
    default: false,
  },
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;
