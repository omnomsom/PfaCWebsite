import "./Animal.css";
import Line from "../components/Line";
import { Link, useParams } from "react-router-dom";
import { demoAnimals } from "../demoAnimals";
import Paw from "../components/Paw";
import Check from "../components/Check";
import Cross from "../components/Cross";

function Animal() {
  const { id } = useParams();
  const animalData = demoAnimals.find((animal) => animal.id === id);

  if (!animalData) {
    return (
      <main className="container py-8">
        <h1 className="f-secondary-heading">Demo animal not found</h1>
        <Link className="underline" to="/gallery">Back to demo animals</Link>
      </main>
    );
  }

  return (
    <div className="container">
      <div className="first-section">
        <div className="left-col">
          <div className="dog-img grid place-items-center !bg-sky-100" aria-hidden="true">
            <Paw width="56" height="56" />
          </div>
        </div>
        <div className="right-col">
          <div>
            <h1 className="main-heading">{animalData.name}</h1>
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
              <Link className="button text-center" to={`/animal/${id}/adopt`}>Adopt</Link>
              <Link className="btn-secondary text-center" to={`/animal/${id}/foster`}>Foster</Link>
            </div>
            <p className="info-text">
              Try an inquiry for this fictional animal.
            </p>
          </div>
        </div>
      </div>
      <div className="second-section flex flex-col gap-5 md:flex-row md:gap-16">
        <div className="md:w-2/3">
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
