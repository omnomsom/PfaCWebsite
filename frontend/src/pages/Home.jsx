import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowRight, FaFacebook, FaHeart, FaHouse, FaPaw } from "react-icons/fa6";
import Card from "../components/Card";
import Hero, { About } from "../components/Hero";
import LoadingAnimation from "../components/LoadingAnimation";
import { useAnimals } from "../useAnimals";
import "./Home.css";

const adoptionSteps = [
  ["Browse profiles", "Read about each dog’s temperament, routine, and care needs. Look for a fit with your household."],
  ["Plan a first meeting", "Ask about feeding, walks, and time alone. Give the dog space to approach at their own pace."],
  ["Prepare your home", "Set up a quiet resting spot and agree on a routine with everyone who will share the dog’s care."],
];

const questions = [
  ["What should I look for in a profile?", "Start with energy level, comfort around people and other pets, and any care needs. Think through an ordinary week at your home."],
  ["How is fostering different from adopting?", "Fostering gives a dog a temporary home while they wait for a permanent one. Adoption means taking on their long-term care."],
  ["What should I bring to a first meeting?", "Bring the people who will live with the dog and a short list of questions. Ask ahead before bringing another pet."],
];

function Home() {
  const { hash, key } = useLocation();
  const { data: animals = [], status } = useAnimals();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [hash, key, status]);

  return (
    <>
      <main>
        <Hero />

        <section className="home-section home-dogs" aria-labelledby="meet-animals">
          <div className="container">
            <div className="home-section-header">
              <div>
                <h2 id="meet-animals" className="f-secondary-heading">Meet the animals</h2>
                <p>Get to know their personalities, rescue stories, and the homes they’d suit.</p>
              </div>
              <Link className="btn-secondary home-action" to="/gallery">
                View all animals <FaArrowRight aria-hidden="true" />
              </Link>
            </div>
            {status === "loading" && <LoadingAnimation />}
            {status === "error" && <p role="alert">The listings couldn’t load. Please try again in a moment.</p>}
            {status === "ready" && (
              animals.length ? (
                <div className="home-dog-grid">
                  {animals.slice(0, 3).map(({ _id, name, breed, age, gender, photos }) => (
                    <Card key={_id} id={_id} name={name} breed={breed} age={age} gender={gender} photo={photos} />
                  ))}
                </div>
              ) : <p>There are no listings to show right now.</p>
            )}
          </div>
        </section>

        <section id="adoption-process" className="home-section home-process" aria-labelledby="process-heading">
          <div className="container">
            <h2 id="process-heading" className="f-secondary-heading">How adoption works</h2>
            <ol className="home-steps">
              {adoptionSteps.map(([title, description], index) => (
                <li key={title} className="home-step">
                  <span className="home-step-number">{index + 1}</span>
                  <h3 className="f-title">{title}</h3>
                  <p>{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="home-section" aria-labelledby="animal-care">
          <div className="container">
            <h2 id="animal-care" className="f-secondary-heading">Finding the right fit</h2>
            <div className="home-options">
              <article className="home-option home-option-adoption">
                <FaHeart aria-hidden="true" />
                <h3 className="f-title">Adoption</h3>
                <p>Think about how much time you have for walks, training, and companionship. Look for a dog whose energy and care needs fit your routine.</p>
                <Link className="btn-secondary home-action" to="/gallery">Explore dog profiles <FaArrowRight aria-hidden="true" /></Link>
              </article>
              <article className="home-option home-option-fostering">
                <FaHouse aria-hidden="true" />
                <h3 className="f-title">Fostering</h3>
                <p>A temporary home gives a dog room to settle. Think about how long you can commit, whether you have a quiet space, and how you’ll handle introductions.</p>
                <a className="btn-secondary home-action" href="#contact">Ask about fostering <FaArrowRight aria-hidden="true" /></a>
              </article>
            </div>
          </div>
        </section>

        <section className="home-section home-faq" aria-labelledby="questions-heading">
          <div className="container home-faq-layout">
            <h2 id="questions-heading" className="f-secondary-heading">Frequently asked questions</h2>
            <div className="home-questions">
              {questions.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="home-section" aria-labelledby="contact-heading">
          <div className="container">
            <div className="home-contact">
              <div>
                <h2 id="contact-heading" className="f-secondary-heading">Get in touch</h2>
                <p>Have a question about adoption or fostering? Include the dog’s name when you reach out so the team can help you with the right profile.</p>
                <a className="button home-action" href="https://www.facebook.com/pawsforacausencr/">
                  <FaFacebook aria-hidden="true" /> Find us on Facebook
                </a>
              </div>
              <FaPaw className="home-contact-paw" aria-hidden="true" />
            </div>
          </div>
        </section>

      </main>
      <footer><About /></footer>
    </>
  );
}

export default Home;
