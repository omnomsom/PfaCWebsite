import { useState } from "react";
import "./Header.css";
import Logo from "../assets/images/Logo.png";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import { FaBars, FaXmark, FaRightToBracket } from "react-icons/fa6";

function Header() {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
            to="/"
          >
            home
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? "links active-link" : "links"
            }
            to="/about"
          >
            about us
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? "links active-link" : "links"
            }
            to="/gallery"
          >
            adopt
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? "links active-link" : "links"
            }
            to="/contact"
          >
            contact us
          </NavLink>
        </nav>
        <button className="btn-header" onClick={openModal}>
          get started
          <FaRightToBracket />
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
}

export default Header;
