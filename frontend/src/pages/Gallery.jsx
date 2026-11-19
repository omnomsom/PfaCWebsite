import { demoAnimals } from "../demoAnimals";
import Card from "../components/Card";
import "./Gallery.css";

function Gallery() {
  return (
    <div className="gallery-wrapper">
      <div className="container">
        <h1 className="f-secondary-heading py-8">
          Meet the demo animals
        </h1>
        <div className="gallery">
          {demoAnimals.map((animal) => (
            <Card
              key={animal.id}
              id={animal.id}
              name={animal.name}
              breed={animal.breed}
              age={animal.age}
              gender={animal.gender}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
