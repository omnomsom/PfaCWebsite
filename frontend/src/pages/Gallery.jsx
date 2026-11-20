import { useState } from "react";
import Card from "../components/Card";
import LoadingAnimation from "../components/LoadingAnimation";
import { useAnimals } from "../useAnimals";
import "./Gallery.css";

function Gallery() {
  const [query, setQuery] = useState("");
  const { data: animals = [], status } = useAnimals();
  const search = query.trim().toLowerCase();
  const matches = animals.filter((animal) =>
    [animal.name, animal.breed].some((value) => value?.toLowerCase().includes(search)),
  );

  return (
    <main className="gallery-wrapper">
      <div className="container">
        <h1 className="f-secondary-heading pt-8">Find your forever friend today!</h1>
        <p className="mt-3 max-w-xl">
          Read each dog’s story, get to know their personality, and see what kind of home might suit them.
        </p>
        {status === "loading" && <LoadingAnimation />}
        {status === "error" && <p role="alert" className="mt-6">The listings couldn’t load. Please try again in a moment.</p>}
        {status === "ready" && (
          <>
            <div className="my-6 flex flex-wrap items-end justify-between gap-4">
              <label className="grid w-full max-w-sm gap-1 font-medium">
                Search by name or breed
                <input
                  className="rounded-lg border border-sky-200 px-4 py-2"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </label>
              <p aria-live="polite">{matches.length} {matches.length === 1 ? "dog" : "dogs"}</p>
            </div>
            {matches.length ? (
              <div className="gallery">
                {matches.map(({ _id, name, breed, age, gender, photos }) => (
                  <Card key={_id} id={_id} name={name} breed={breed} age={age} gender={gender} photo={photos} />
                ))}
              </div>
            ) : (
              <p>{search ? "No dogs match that search." : "There are no listings to show right now."}</p>
            )}
          </>
        )}
      </div>
    </main>
  );
}

export default Gallery;
