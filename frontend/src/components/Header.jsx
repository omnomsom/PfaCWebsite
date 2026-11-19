import { useState } from "react";
import "./Header.css";
import Logo from "../assets/images/Logo.png";
import { NavLink } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className=" primary-header">
      <div className="container header">
        <NavLink to="/">
          <img className="" src={Logo} alt="Logo" />
        </NavLink>
        {showMenu ? (
          <FaXmark className="close-icon" size={30} onClick={toggleMenu} />
        ) : (
          <FaBars className="bar-icon" size={30} onClick={toggleMenu} />
        )}

        <nav id={showMenu ? "hidden-menu" : ""}>
          <NavLink
            className={(navData) =>
              navData.isActive ? "links active-link" : "links"
            }
            end
            to="/"
          >
            home
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? "links active-link" : "links"
            }
            to="/gallery"
            onClick={() => setShowMenu(false)}
          >
            demo animals
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Header;
