import { Link } from "react-router-dom";
import Card from "../components/Card";
import Hero from "../components/Hero";
import { demoAnimals } from "../demoAnimals";

function Home() {
  return (
    <>
      <Hero />
      <section className="container py-12" aria-labelledby="meet-animals">
        <h2 id="meet-animals" className="f-secondary-heading">
          Meet the animals
        </h2>
        <p className="my-4">
          Get to know each dog’s personality, daily routine, and care needs.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demoAnimals.map(({ _id, photos, ...animal }) => (
            <Card key={_id} id={_id} photo={photos} {...animal} />
          ))}
        </div>
        <Link className="button mt-6 inline-flex" to="/gallery">
          View all animals
        </Link>
      </section>
      <section className="bg-sky-50 py-12" aria-labelledby="animal-care">
        <div className="container">
          <h2 id="animal-care" className="f-secondary-heading">
            Finding the right fit
          </h2>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="f-title">Adoption</h3>
              <p className="mt-2">
                Think about how much time you have for walks, training, and
                companionship. Look for a dog whose energy level and care needs
                fit your daily routine.
              </p>
            </div>
            <div>
              <h3 className="f-title">Fostering</h3>
              <p className="mt-2">
                Fostering gives a dog a temporary home and a steady routine.
                Consider what you can offer, such as a quiet place to settle
                or time to practice basic skills.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
