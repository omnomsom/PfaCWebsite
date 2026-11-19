import "./Animal.css";
import Line from "../components/Line";
import { useState, useEffect } from "react";
import { demoAnimals } from "../demoAnimals";
import { useParams } from "react-router-dom";
import Loading from "../assets/images/Loading.gif";
import Check from "../components/Check";
import Cross from "../components/Cross";

function Animal() {
  const { id } = useParams();
  const animalData = demoAnimals.find((animal) => animal._id === id);

  useEffect(() => {
    if (animalData) {
      setMainImage(animalData.photos && animalData.photos[0]);
      setActiveSmallImage(animalData.photos && animalData.photos[0]);
    }
  }, [animalData]);

  const [mainImage, setMainImage] = useState(Loading);
  const [activeSmallImage, setActiveSmallImage] = useState(Loading);

  const handleImageChange = (newImage) => {
    setMainImage(newImage);
    setActiveSmallImage(newImage); // Set the active small image when the main image changes
  };

  if (!animalData) {
    return <h1>Animal not found</h1>;
  }

  return (
    <div className="container">
      <div className="first-section">
        <div className="left-col">
          <div className="carousel">
            {animalData.photos &&
              animalData.photos.map((photo, index) => (
                <div
                  key={index}
                  className={`small-image ${
                    activeSmallImage === photo ? "active-img" : ""
                  }`}
                  onMouseEnter={() => handleImageChange(photo)}
                >
                  <img src={photo} alt={`SmallImage${index}`} />
                </div>
              ))}
          </div>
          <div className="dog-img">
            <img src={mainImage} alt="MainDogImage" />
          </div>
        </div>
        <div className="right-col">
          <div>
            <button className="main-heading">{animalData.name}</button>
            <p className="subheading-caps">Breed</p>
            <p className="subheading-text">{animalData.breed}</p>
            <p className="subheading-caps">Sex</p>
            <p className="subheading-text">{animalData.gender}</p>
            <p className="subheading-caps">Age</p>
            <p className="subheading-text">{animalData.age}</p>
            <Line />
            <p className="subheading-caps mt-3">About</p>
            <p className="rightcol-text mt-1">{animalData.about}</p>
          </div>
          <div className="non-info-wrapper">
            <div className="btn-wrapper">
              <button className="button">adopt</button>
              <button className="btn-secondary">foster</button>
            </div>
            <p className="info-text">
              Not sure how this works? <span>Click here.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="second-section flex gap-32  ">
        <div className=" w-2/3">
          <p className="my-2 subheading-caps">Rescue Story</p>
          <p className=" moreinfo-text">{animalData.info}</p>
        </div>
        <div>
          <p className="my-2 subheading-caps">Additional Information</p>
          <div className="items-center flex gap-2">
            {animalData.vaccinated ? <Check /> : <Cross />}
            <p className="moreinfo-text">
              {animalData.vaccinated ? "Vaccinated" : "Not Vaccinated"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {animalData.neutered ? <Check /> : <Cross />}
            <p className="moreinfo-text">
              {animalData.neutered ? "Neutered" : "Not Neutered"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal;
