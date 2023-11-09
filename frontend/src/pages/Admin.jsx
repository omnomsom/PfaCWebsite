import React, { useState } from "react";
import axios from "axios";
import "./Admin.css";

const Admin = () => {
  const [animalData, setAnimalData] = useState({
    name: "",
    age: 0,
    breed: "",
    gender: "",
    photo: null, // To store the uploaded photo as a file
    about: "",
    info: "",
    vaccinated: false,
    neutered: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnimalData({ ...animalData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    setAnimalData({ ...animalData, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", animalData.name);
    formData.append("age", animalData.age);
    formData.append("breed", animalData.breed);
    formData.append("gender", animalData.gender);
    formData.append("photo", animalData.photo);
    formData.append("about", animalData.about);
    formData.append("info", animalData.info);
    formData.append("vaccinated", animalData.vaccinated);
    formData.append("neutered", animalData.neutered);

    try {
      const response = await axios.post("/api/Admin", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Animal added:", response.data);
    } catch (error) {
      console.error("Error adding animal:", error);
    }
  };

  return (
    <div className="add-animal-form">
      <h2>Add a New Animal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={animalData.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={animalData.age}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="breed"
          placeholder="Breed"
          value={animalData.breed}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={animalData.gender}
          onChange={handleInputChange}
        />
        <input type="file" name="photo" onChange={handlePhotoChange} />
        <textarea
          name="about"
          placeholder="About"
          value={animalData.about}
          onChange={handleInputChange}
        />
        <textarea
          name="info"
          placeholder="Additional Info"
          value={animalData.info}
          onChange={handleInputChange}
        />
        <label>
          Vaccinated:{" "}
          <input
            type="checkbox"
            name="vaccinated"
            checked={animalData.vaccinated}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Neutered:{" "}
          <input
            type="checkbox"
            name="neutered"
            checked={animalData.neutered}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Animal</button>
      </form>
    </div>
  );
};

export default Admin;
