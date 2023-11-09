import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import "./Gallery.css";

function Gallery() {
  const [animalData, setAnimalData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/animals/")
      .then((response) => {
        setAnimalData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="gallery-wrapper">
      <div className="container">
        <h1 className="f-secondary-heading py-8">
          Find your forever friend today!
        </h1>
        <div className="gallery">
          {animalData.map((animal) => (
            <Card
              key={animal._id}
              id={animal._id} // Passing the 'id' as a prop to the Card component
              name={animal.name}
              breed={animal.breed}
              age={animal.age}
              gender={animal.gender}
              photo={animal.photos}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
