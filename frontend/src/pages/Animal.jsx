import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import AnimalPhoto from "../components/AnimalPhoto";
import Check from "../components/Check";
import Cross from "../components/Cross";
import Line from "../components/Line";
import LoadingAnimation from "../components/LoadingAnimation";
import { useAnimals } from "../useAnimals";
import "./Animal.css";

function Animal() {
  const { id } = useParams();
  const { data: animal, status } = useAnimals(`/animals/${encodeURIComponent(id)}`);

  if (status === "loading") return <LoadingAnimation />;

  if (status !== "ready") {
    return (
      <main className="container py-8">
        <h1 className="f-secondary-heading">{status === "missing" ? "Animal not found" : "This profile couldn’t load"}</h1>
        <Link className="btn-secondary mt-4 inline-block" to="/gallery">Back to the animals</Link>
      </main>
    );
  }

  return <AnimalProfile key={id} animal={animal} />;
}

function AnimalProfile({ animal }) {
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const { name, breed, gender, age, about, info, vaccinated, neutered, photos = [] } = animal;

  return (
    <main className="container pb-12 pt-5">
      <Link className="btn-secondary inline-block" to="/gallery">Back to the animals</Link>
      <div className="first-section">
        <div className="left-col">
          {photos.length > 1 && (
            <div className="carousel" aria-label={`Photos of ${name}`}>
              {photos.map((photo, index) => (
                <button
                  type="button"
                  key={index}
                  aria-label={`Show photo ${index + 1}`}
                  aria-pressed={selectedPhoto === index}
                  className={`small-image ${selectedPhoto === index ? "active-img" : ""}`}
                  onClick={() => setSelectedPhoto(index)}
                >
                  <AnimalPhoto src={photo} alt="" />
                </button>
              ))}
            </div>
          )}
          <div className="dog-img">
            <AnimalPhoto src={photos[selectedPhoto]} alt={name} />
          </div>
        </div>

        <div className="right-col">
          <div>
            <h1 className="main-heading">{name}</h1>
            <dl className="grid grid-cols-2 gap-x-4 sm:grid-cols-3">
              <div>
                <dt className="subheading-caps">Breed</dt>
                <dd className="subheading-text">{breed}</dd>
              </div>
              <div>
                <dt className="subheading-caps">Sex</dt>
                <dd className="subheading-text">{gender}</dd>
              </div>
              <div>
                <dt className="subheading-caps">Age at listing</dt>
                <dd className="subheading-text">{age}</dd>
              </div>
            </dl>
            <Line />
            <h2 className="subheading-caps mt-3">About</h2>
            <p className="rightcol-text mt-1">{about}</p>
          </div>
          <div className="non-info-wrapper">
            <div className="btn-wrapper">
              <Link className="button" to="/#contact">adopt</Link>
              <Link className="btn-secondary text-center" to="/#contact">foster</Link>
            </div>
            <p className="info-text">
              Mention {name} when reaching out to check current availability.
            </p>
          </div>
        </div>
      </div>

      <div className="second-section grid gap-8 py-6 md:grid-cols-[2fr_1fr]">
        <section>
          <h2 className="my-2 subheading-caps">Rescue Story</h2>
          <p className="moreinfo-text whitespace-pre-line">{info}</p>
        </section>
        <section className="rounded-xl bg-sky-50 p-5">
          <h2 className="my-2 subheading-caps">Additional Information</h2>
          <div className="items-center flex gap-2">
            {vaccinated ? <Check /> : <Cross />}
            <p className="moreinfo-text">{vaccinated ? "Vaccinated" : "Not Vaccinated"}</p>
          </div>
          <div className="flex items-center gap-2">
            {neutered ? <Check /> : <Cross />}
            <p className="moreinfo-text">{neutered ? "Neutered" : "Not Neutered"}</p>
          </div>
        </section>
      </div>

      <section className="mt-5 rounded-xl border border-sky-100 p-5">
        <h2 className="f-title">Before you meet {name}</h2>
        <p className="mt-2 max-w-2xl">
          Ask about daily walks, time alone, and how {name} handles new people or other pets.
          If you’re considering fostering, share how long you can offer a home and what your daily routine looks like.
        </p>
        <Link className="btn-secondary mt-4 inline-block" to="/#adoption-process">How adoption works</Link>
      </section>
    </main>
  );
}

export default Animal;
