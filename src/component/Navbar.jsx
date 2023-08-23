import React from "react";
import "../index.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyles = {
    color: "var(--font-high-emphasis, #25282B)",
    fontFamily: "Comfortaa",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "180%",
  };
  return (
    <main className="container-fluid mb-5">
      <div className="row">
        <nav
          className="navbar navbar-brand navbar-nav nav-link navbar-expand-lg "
          style={{ marginLeft: "120px", width: "480px" }}
        >
          <div className=" container-fluid">
            <NavLink
              to="/"
              className="navbar-brand nav-head text-dark"
              style={{
                marginRight: "779px",
                fontFamily: "Comfortaa",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "180%",
              }}
            >
              Madelyn Torff
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    className="nav-link nav-project"
                    id="aboutme-link"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/projects"
                    className="nav-link nav-project"
                    id="projects-link"
                    style={{ marginLeft: "48px" }}
                  >
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link vav-contact"
                    href="#footer-link"
                    style={{ marginLeft: "48px" }}
                  >
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </main>
  );
}
