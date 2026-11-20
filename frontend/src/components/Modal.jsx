import "./Modal.css";
import { useEffect, useRef, useState } from "react";
import ModalImg from "../assets/images/Modal.png";
import { FaXmark } from "react-icons/fa6";
import Paw from "./Paw";
import { api } from "../api";

const accountsEnabled = import.meta.env.VITE_ENABLE_ACCOUNTS === "true";

function Modal({ onClose, onAuthenticated }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const request = useRef(null);

  useEffect(() => () => request.current?.abort(), []);

  function switchMode() {
    setErrorMessage("");
    setIsRegistering((registering) => !registering);
  }

  async function submitAccount(event) {
    event.preventDefault();
    if (!accountsEnabled || request.current) return;

    const fields = new FormData(event.currentTarget);
    const email = fields.get("email")?.trim();
    const password = fields.get("password");
    const name = fields.get("name")?.trim();

    if (isRegistering && !name) {
      setErrorMessage("Enter your name.");
      return;
    }

    if (isRegistering && password !== fields.get("password2")) {
      setErrorMessage("The passwords don’t match.");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);
    const controller = new AbortController();
    request.current = controller;

    try {
      const path = isRegistering ? "/users" : "/users/login";
      const account = isRegistering ? { name, email, password } : { email, password };
      const { data } = await api.post(path, account, { signal: controller.signal, timeout: 15000 });
      if (typeof data?.name !== "string" || typeof data?.token !== "string") {
        throw new Error("Unexpected account response");
      }
      onAuthenticated(data.name);
    } catch (error) {
      if (controller.signal.aborted) return;
      const { status, data } = error.response ?? {};
      setErrorMessage(
        status === 400 && typeof data?.message === "string"
          ? data.message
          : "The account service couldn’t respond. Please try again.",
      );
    } finally {
      request.current = null;
      if (!controller.signal.aborted) setIsSubmitting(false);
    }
  }

  return (
    <div className="overlay">
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="account-heading">
        <div className="left-column">
          <img src={ModalImg} alt="" />
        </div>
        <div className="right-column">
          <button className="icon-close" type="button" aria-label="Close account form" onClick={onClose}>
            <FaXmark size={30} />
          </button>
          <div className="modal-content">
            <h3 id="account-heading">
              {isRegistering ? <><span>Register</span> Now</> : <><span>Sign</span> In</>}
            </h3>
            <p>Your Forever Friend Awaits</p>
            <form className="account-form" key={String(isRegistering)} onSubmit={submitAccount}>
              <div className="form">
                {isRegistering && (
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" autoComplete="name" maxLength={100} required />
                  </div>
                )}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" autoComplete="username" maxLength={254} required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    autoComplete={isRegistering ? "new-password" : "current-password"}
                    minLength={isRegistering ? 12 : undefined}
                    required
                  />
                  {isRegistering && <small>Use at least 12 characters.</small>}
                </div>
                {isRegistering && (
                  <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" id="password2" name="password2" autoComplete="new-password" required />
                  </div>
                )}
              </div>
              {errorMessage && <p className="account-error" role="alert">{errorMessage}</p>}
              {!accountsEnabled && <p className="account-notice">Accounts are available in the test environment.</p>}
              <button className="button" type="submit" disabled={!accountsEnabled || isSubmitting}>
                {isSubmitting ? "Please wait…" : isRegistering ? "register" : "sign in"}
                <Paw />
              </button>
            </form>
            <p>
              {isRegistering ? "Already have an account? " : "Don't have an account? "}
              <button type="button" className="mode-switch" disabled={isSubmitting} onClick={switchMode}>
                {isRegistering ? "Sign In" : "Register"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
