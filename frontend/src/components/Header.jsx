import { useState } from "react";
import "./Header.css";
import Logo from "../assets/images/Logo.png";
import { Link, NavLink } from "react-router-dom";
import Modal from "./Modal";
import { FaBars, FaXmark, FaRightToBracket } from "react-icons/fa6";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const closeMenu = () => setShowMenu(false);

  function openModal() {
    closeMenu();
    setIsModalOpen(true);
  }

  return (
    <header className="primary-header">
      <div className="container header">
        <NavLink to="/" onClick={closeMenu}>
          <img src={Logo} alt="Paws for a Cause" />
        </NavLink>
        <button
          className="menu-toggle"
          type="button"
          aria-label={showMenu ? "Close navigation" : "Open navigation"}
          aria-expanded={showMenu}
          aria-controls="primary-nav"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <FaXmark size={30} /> : <FaBars size={30} />}
        </button>

        <nav id="primary-nav" className={showMenu ? "is-open" : ""}>
          <NavLink className={({ isActive }) => isActive ? "links active-link" : "links"} to="/" end onClick={closeMenu}>
            home
          </NavLink>
          <Link className="links" to="/#about" onClick={closeMenu}>about us</Link>
          <NavLink className={({ isActive }) => isActive ? "links active-link" : "links"} to="/gallery" onClick={closeMenu}>
            adopt
          </NavLink>
          <Link className="links" to="/#contact" onClick={closeMenu}>contact us</Link>
          <button className="links mobile-start" type="button" onClick={openModal}>sign in</button>
        </nav>
        <button className="btn-header" type="button" onClick={openModal}>
          sign in
          <FaRightToBracket />
        </button>
        {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
      </div>
    </header>
  );
}

export default Header;
