import "./Modal.css";
import React, { useState } from "react";
import ModalImg from "../assets/images/Modal.png";
import { FaXmark } from "react-icons/fa6";
import Paw from "./Paw";

function Modal({ isOpen, onClose }) {
  const [isRegistering, setIsRegistering] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <div className="left-column">
          <img src={ModalImg}></img>
        </div>
        <div className="right-column">
          <FaXmark className="icon-close" size={30} onClick={onClose} />
          {isRegistering ? (
            <div className="modal-content">
              <h3>
                <span>Register</span> Now
              </h3>
              <p>Your Forever Friend Awaits</p>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" />
                </div>
                <div className="form-group">
                  <label htmlFor="password2">Confirm Password</label>
                  <input type="password" id="password2" name="password2" />
                </div>
              </div>

              <button className="button">
                register
                <Paw />
              </button>
              <p>
                Already have an account?{" "}
                <a onClick={() => setIsRegistering(false)}>Sign In</a>
              </p>
            </div>
          ) : (
            <div className="modal-content">
              <h3>
                <span>Sign</span> In
              </h3>
              <p>Your Forever Friend Awaits</p>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" />
                </div>
              </div>

              <button className="button">
                sign in
                <Paw />
              </button>
              <p>
                Don't have an account?{" "}
                <a onClick={() => setIsRegistering(true)}>Register</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
