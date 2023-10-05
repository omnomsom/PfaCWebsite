const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
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
  photo: {
    type: String,
    required: true,
  },
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;
