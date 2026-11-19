import { Link } from "react-router-dom";
import "./Card.css";
import Paw from "./Paw";
import Male from "../assets/images/Male.png";
import Female from "../assets/images/Female.png"; // Import the female icon

function Card({ id, name, breed, age, gender }) {
  return (
    <Link
      to={`/animal/${id}`}
      style={{ textDecoration: "none" }}
      className="card-link"
    >
      {" "}
      {/* Wrap the entire card content in Link */}
      <div className="card rounded-2xl rounded-t-xl bg-white">
        <div className="card-img">
          <div className="grid w-full place-items-center bg-sky-100" aria-hidden="true">
            <Paw width="56" height="56" />
          </div>
        </div>
        <div className="card-content">
          <div>
            <h3 className="f-title">{name}</h3>
            <p className="f-body">{breed}</p>
            <p className="f-body">{age}</p>
          </div>

          {gender === "Male" && (
            <img className="h-10" src={Male} alt="Male Icon" />
          )}

          {gender === "Female" && (
            <img className="h-10" src={Female} alt="Female Icon" />
          )}
        </div>
      </div>
    </Link>
  );
}

export default Card;
