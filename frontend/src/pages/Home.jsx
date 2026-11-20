import { Link } from "react-router-dom";
import Card from "../components/Card";
import Hero from "../components/Hero";
import { demoAnimals } from "../demoAnimals";

const adoptionSteps = [
  ["Browse profiles", "Compare each dog’s age, temperament, and daily needs. Pick a profile that fits your household."],
  ["Make an introduction", "Plan a quiet first meeting. Give the dog time to approach and ask about routines, training, and care."],
  ["Prepare for home", "Set up a quiet resting spot, plan the first few walks, and agree on a consistent routine with your household."],
];

const questions = [
  ["What should I look for in a profile?", "Start with the dog’s energy level, comfort around people and other pets, and any care needs. Consider how those fit into an ordinary week at your home."],
  ["How is fostering different from adopting?", "Fostering usually means caring for a dog temporarily while they wait for a permanent home. With adoption, you take on their long-term care."],
  ["What should I bring to a first meeting?", "Bring the people who will live with the dog and a short list of questions about feeding, walks, and time alone. Ask ahead before bringing another pet."],
];

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
      <section id="adoption-process" className="bg-sky-50 py-14" aria-labelledby="process-heading">
        <div className="container">
          <h2 id="process-heading" className="f-secondary-heading">How adoption works</h2>
          <ol className="mt-6 grid list-none gap-5 md:grid-cols-3" role="list">
            {adoptionSteps.map(([title, description]) => (
              <li key={title} className="rounded-xl border border-sky-100 bg-white p-6">
                <h3 className="f-title">{title}</h3>
                <p className="mt-2">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="py-14" aria-labelledby="animal-care">
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
      <section className="bg-sky-50 py-14" aria-labelledby="questions-heading">
        <div className="container">
          <h2 id="questions-heading" className="f-secondary-heading">Frequently asked questions</h2>
          <div className="mt-6 space-y-3">
            {questions.map(([question, answer]) => (
              <details key={question} className="rounded-xl border border-sky-100 bg-white p-5">
                <summary className="cursor-pointer font-bold">{question}</summary>
                <p className="mt-3">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <footer className="container flex flex-wrap items-center justify-between gap-6 py-12">
        <div>
          <h2 className="f-secondary-heading">Ready to meet the dogs?</h2>
          <p className="mt-2">Explore the profiles and see who might fit your home.</p>
        </div>
        <Link className="button inline-flex" to="/gallery">Browse animals</Link>
      </footer>
    </>
  );
}

export default Home;
