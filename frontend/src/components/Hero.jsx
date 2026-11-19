import "./Hero.css";
import heroimg from "../assets/images/Hero.png";
import PfacLogo from "../assets/images/PfacLogo.png";
import Paw from "./Paw";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigateTo = useNavigate();

  return (
    <>
      <section className="hero padding-block-700">
        <div className="container">
          <div className="even-columns">
            <div className="first-col">
              <h1 className="f-primary-heading">
                <span>Adopt</span> a Loving Companion Today.
              </h1>
              <p className="f-primary-p">
                Because every animal deserves a loving family and a second
                chance at happiness.
              </p>
              <div className="hero-buttons">
                <button
                  onClick={() => {
                    navigateTo("/gallery");
                  }}
                  className=" button"
                >
                  adopt now
                  <Paw />
                </button>
                <button className="btn-secondary">learn more</button>
              </div>
            </div>
            <div className="hero-img">
              <img src={heroimg} alt="hero" />
            </div>
          </div>
        </div>
      </section>
      <section className="paws-for-a-cause padding-block-700">
        <div className="container">
          <div className="even-columns">
            <div className="paws-img">
              <img
                src={PfacLogo}
                alt="Paws for a Cause"
                className="paws-image"
              />
            </div>
            <div className="paws-text">
              <h2 className="f-primary-heading">Paws for a Cause</h2>
              <div className="flex flex-col gap-3">
                <p className=" text-xl text-justify">
                  Paws for a Cause is an animal welfare initiative by young
                  people in Delhi who have chosen to combine their work as
                  animal rescuers or adoptions coordinators under a common
                  platform. Our aim is to spread the word about homeless and
                  abandoned companion animals who need loving forever homes.
                </p>
                <p className=" text-xl text-justify">
                  The process of adoption can be lengthy and difficult so our
                  goal is to simplify things for those interested in it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
