import { useState } from "react";
import "./Header.css";
import Logo from "../assets/images/Logo.png";
import { Link, NavLink } from "react-router-dom";
import Modal from "./Modal";
import { FaBars, FaXmark, FaRightToBracket } from "react-icons/fa6";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [accountName, setAccountName] = useState(null);
  const closeMenu = () => setShowMenu(false);

  function handleAccountAction() {
    closeMenu();
    if (accountName) {
      setAccountName(null);
    } else {
      setIsModalOpen(true);
    }
  }

  function handleAuthenticated(name) {
    setAccountName(name);
    setIsModalOpen(false);
  }

  const accountAction = accountName ? "sign out" : "sign in";

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
          <button className="links mobile-start" type="button" onClick={handleAccountAction}>{accountAction}</button>
        </nav>
        <button className="btn-header" type="button" onClick={handleAccountAction}>
          {accountAction}
          <FaRightToBracket />
        </button>
        <span className="sr-only" role="status">{accountName && `Signed in as ${accountName}`}</span>
        {isModalOpen && (
          <Modal
            onClose={() => setIsModalOpen(false)}
            onAuthenticated={handleAuthenticated}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
